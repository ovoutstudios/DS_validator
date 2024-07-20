import * as server from "@minecraft/server";

const world = server.world;
const system = server.system;

// Lista de scoreboards que se deben validar
const scoreboardsToValidate = [
  "ds.current_counter",
  "ds.max_counter",
  "ds.rewards_given",
  "ds.dead_counter"
];

// Función para validar scoreboards
function validateScoreboards() {
  const missingScoreboards = [];
  const presentScoreboards = [];

  scoreboardsToValidate.forEach(scoreboard => {
    if (world.scoreboard.getObjective(scoreboard)) {
      presentScoreboards.push(scoreboard);
    } else {
      missingScoreboards.push(scoreboard);
    }
  });

  let resultMessage = "";

  if (presentScoreboards.length > 0) {
    resultMessage += "Present scoreboards:\n\n";
    presentScoreboards.forEach(scoreboard => {
      resultMessage += `§a ${scoreboard} §r\n`;
    });
    resultMessage += "\n";
  }

  if (missingScoreboards.length > 0) {
    resultMessage += "Missing scoreboards:\n\n";
    missingScoreboards.forEach(scoreboard => {
      resultMessage += `§c ${scoreboard} §r\n`;
    });
  }

  return resultMessage.trim(); // Eliminar espacios innecesarios
}

// Función para validar y agregar un reward
function validateAndAddReward(message) {
  const reward_values = message.trim();
  // Utilizamos una expresión regular para dividir la cadena en partes
  const args = reward_values.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g).map(arg => arg.trim());

  // Validar que hay exactamente 6 argumentos
  if (args.length !== 6) {
    return '§8[DS_console]: §cFailed format§r /scriptevent ds:add_reward "<reward_name>","<reward_description>",<reward_day>,<reward_repeat_day>,"<reward_id>","<studio_name>"';
  } else {
    const [nombre, descripcion, dia, repeat_day, id, studio_name] = args;

    // Validar si dia y repeat_day son números enteros positivos y no decimales
    const diaNumero = Number(dia);
    const repeatDayNumero = Number(repeat_day);
    const diaEsEntero = dia.includes('.') === false && !isNaN(diaNumero) && Number.isInteger(diaNumero);
    const repeatDayEsEntero = repeat_day.includes('.') === false && !isNaN(repeatDayNumero) && Number.isInteger(repeatDayNumero);

    // Validar que nombre, descripcion, id y studio_name estén entre comillas y que dia y repeat_day no estén entre comillas
    const nombreValido = nombre.startsWith('"') && nombre.endsWith('"');
    const descripcionValido = descripcion.startsWith('"') && descripcion.endsWith('"');
    const diaValido = !isNaN(dia) && !dia.startsWith('"') && !dia.endsWith('"');
    const repeatDayValido = !isNaN(repeat_day) && !repeat_day.startsWith('"') && !repeat_day.endsWith('"');
    const idValido = id.startsWith('"') && id.endsWith('"');
    const studioNameValido = studio_name.startsWith('"') && studio_name.endsWith('"');

    // Validar el formato de reward_id
    const idPattern = /^"ds_r\.[^".]+\.[^".]+"$/;
    const idFormatValido = idPattern.test(id);

    if (!diaEsEntero || !diaValido || !repeatDayEsEntero || !repeatDayValido) {
      return '§8[DS_console]: §cFailed format§r the day and repeat day should be integers and should not be enclosed in quotation marks.';
    } else if (!nombreValido || !descripcionValido || !idValido || !studioNameValido) {
      return '§8[DS_console]: §cFailed format§r <reward_name>, <reward_description>, <reward_id>, and <studio_name> must be enclosed in quotation marks.';
    } else if (!idFormatValido) {
      return '§8[DS_console]: §cFailed format§r <reward_id> must be in the format "ds_r.<studio_name>.<reward_id>"';
    } else {
      // Quitar las comillas de nombre, descripcion, id y studio_name
      const cleanNombre = nombre.slice(1, -1);
      const cleanDescripcion = descripcion.slice(1, -1);
      const cleanId = id.slice(1, -1);
      const cleanStudioName = studio_name.slice(1, -1);

      // Agregar el reward al dynamic property
      const newReward = {
        reward_name: cleanNombre,
        reward_description: cleanDescripcion,
        reward_day: diaNumero,
        reward_repeat_day: repeatDayNumero,
        reward_id: cleanId,
        studio_name: cleanStudioName
      };

      return '§8[DS_console]: §aReward successfully added.';
    }
  }
}

// Función principal de validación de scoreboards
function runValidation() {
  return validateScoreboards();
}

// Suscripción al evento personalizado 'ds:test' y 'ds:add_reward'
system.afterEvents.scriptEventReceive.subscribe((data) => {
  const { id, sourceEntity, message } = data;

  if (id === "ds:test") {
    const validationMessage = runValidation();
    sourceEntity.sendMessage(`-------------\nValidation Result:\n\n${validationMessage}\n-------------`);
  }

  if (id === "ds:add_reward") {
    const validationMessage = validateAndAddReward(message);
    sourceEntity.sendMessage(validationMessage);
  }
});

# Days Survived Counter Addon

Gracias por su interes en integrar nuestro addon con el suyo.❤️ 

## Introducción

**Days Survived Counter Addon** (DS) permite a los jugadores llevar un registro de los días que han sobrevivido en el juego y recibir recompensas en función de estos días. Este addon incluye un sistema de recompensas que se puede personalizar, permitiendo a otros addons/creadores agregar nuevas recompensas utilizando comandos específicos. Pronto agregaremos mas funcionalidades de integracion.

## Funcionalidades

- **Contador de Días Sobrevividos:** Mantiene un registro de los días que cada jugador ha sobrevivido.
- **Recompensas Personalizables:** Los jugadores pueden recibir recompensas después de sobrevivir un número específico de días.
- **Integración con Otros Addons:** Otros addons pueden agregar nuevas recompensas utilizando comandos.

## Estadísticas Disponibles
**DS** utiliza scoreboards para llevar un registro de varias estadísticas importantes, que pueden ser consultadas y utilizadas por los desarrolladores / creadores para crear contenido adicional y creativo. Las estadísticas disponibles son:
#### Estadísticas individuales (corresponde a cada jugador):
- **Días Sobrevividos Actuales:** `ds.current_counter` El número de días que un jugador ha sobrevivido actualmente.
- **Máximos Días Sobrevividos:** `ds.max_counter` El mayor número de días que un jugador ha sobrevivido en una sola vida.
- **Recompensas Entregadas:** `ds.rewards_given` El número total de recompensas que un jugador ha recibido.
- **Recuento de Muertes:** `ds.dead_counter` El número de veces que un jugador ha muerto.
#### Estadísticas globales (corresponde al total entre los jugadores en el mundo):
- **Promedio de Días Sobrevividos:** `ovout_studios:avg_days_survived` El promedio de días sobrevividos entre todos los jugadores.
- **Total de Días Sobrevividos:** `ovout_studios:total_days_survived` El total de días sobrevividos acumulados por todos los jugadores.
- **Total de Recompensas Entregadas:** `ovout_studios:total_rewards_given` El total de recompensas entregadas a todos los jugadores.
- **Total de Jugadores con Recompensas:** `ovout_studios:total_players_with_rewards` El número total de jugadores que han recibido al menos una recompensa.
- **Máximos Días Sobrevividos entre Todos los Jugadores:** `ovout_studios:max_days_survived` El mayor número de días sobrevividos por cualquier jugador.
- **Máximo de Recompensas Recibidas por un Jugador:** `ovout_studios:max_rewards_received` El mayor número de recompensas recibidas por un solo jugador.

## Cómo Crear Nuevas Recompensas

Otros addons pueden crear nuevas recompensas utilizando el comando `/scriptevent ds:add_reward`. La sintaxis del comando es la siguiente:

`/scriptevent ds:add_reward "<reward_name>","<reward_description>",<reward_day>,<reward_repeat_day>,"<reward_id>","<studio_name>"`

### Explicación de los Campos

- `"<reward_name>"`: El nombre de la recompensa. Debe estar entre comillas dobles. Ejemplo: `"Iron Forging"`.
- `"<reward_description>"`: La descripción de la recompensa. Debe estar entre comillas dobles. Ejemplo: `"Iron tools and equipment"`.
- `<reward_day>`: El día específico en el que se otorga la recompensa. Debe ser un número entero. Ejemplo: `3`.
- `<reward_repeat_day>`: El intervalo en días para repetir la recompensa. Si no se repite, debe ser `0`. Ejemplo: `7`.
- `"<reward_id>"`: El identificador único de la recompensa. Debe estar entre comillas dobles y seguir el formato `ds.<studio_namespace>.<unique_id>`. Ejemplo: `"ds.ovout_studios.reward_1"`.
- `"<studio_name>"`: El nombre del estudio o creador de la recompensa. Debe estar entre comillas dobles. Ejemplo: `"Ovout Studios"`.

### Consideraciones Importantes

- **ID de la Recompensa:** El `reward_id` debe ser único para cada recompensa. Esto asegura que no haya conflictos entre diferentes recompensas.
- **Formato Correcto:** Asegúrese de que todos los campos estén en el formato correcto, especialmente el `reward_id`, que debe seguir el patrón `ds.<studio_namespace>.<unique_id>`.

### Ejemplo de Uso

Supongamos que desea agregar una nueva recompensa llamada "Master Explorer" con la descripción "Diamond tools and armor", que se otorga en el día 15 y se repite cada 30 días. Su comando sería:

`/scriptevent ds:add_reward "Master Explorer","Diamond tools and armor",15,30,"ds.ovout_studios.master_explorer","Ovout Studios"`

## Implementación de Recompensas

Para implementar y activar las recompensas creadas, sigue estos pasos:

1. **Definir la Recompensa:** Utiliza el comando `/scriptevent ds:add_reward` para definir una nueva recompensa.
2. **Otorgar Recompensas:** El addon se encargará de otorgar las recompensas a los jugadores en el día especificado y, si está configurado, repetirá la recompensa según el intervalo definido.


## Conclusión

El **Days Survived Counter Addon** no solo proporciona una forma divertida de rastrear los días sobrevividos en Minecraft, sino que también permite a los creadas de otros addons extender su funcionalidad mediante la adición de recompensas personalizadas incluso crear eneventos personalizados de acuerdo a los dias sobrevividos, por ejemplo: Spawnear una orda de orcos furiosos cuando el jugador halla sobrevivido 100 dias. Asegúrate de seguir las pautas y formatos mencionados para asegurar una integración sin problemas.


Developed by: **Syclone Studios** https://www.syclonestudios.com/

In collaboration with: **Ovout Studios** https://ovout.net/

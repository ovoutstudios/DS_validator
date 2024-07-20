# Days Survived Counter Addon

Thank you for your interest in integrating our addon with yours.❤️ 

## Introduction

**Days Survived Counter Addon** (DS) allows players to keep track of the days they have survived in the game and receive rewards based on these days. This addon includes a customizable reward system, allowing other addons/creators to add new rewards using specific commands. More integration features will be added soon.

## Functionalities

- **Days Survived Counter:** Keeps track of the days each player has survived.
- **Customizable Rewards:** Players can receive rewards after surviving a specific number of days.
- **Integration with Other Addons:** Other addons can add new rewards or create many other creative things like creating events using some available stats.

## Stats Available
**DS** uses scoreboards to keep track of various important statistics, which can be accessed and used by developers / creators to create additional and creative content:
#### Individual statistics (corresponds to each player):
- **Current Survived Days:** `ds.current_counter` The number of days a player has currently survived.
- **Maximum Days Survived:** `ds.max_counter` The greatest number of days a player has survived in a single lifetime.
- **Rewards Given:** `ds.rewards_given` The total number of rewards a player has received.
- **Death Count:** `ds.dead_counter` The number of times a player has died.

Example:

using commands:
```
/scoreboard players test @s ds.current_counter *

/execute as @a positioned as @s if entity @s[scores={ds.current_counter=5}] run function my-custom-event
```
using scripts:
```
    const RewardsGivenCounter = world.scoreboard.getObjective('ds.rewards_given');
    const rewardsGiven = RewardsGivenCounter.getScore(player);

    if (rewardsGiven >= 3) {
        player.runCommandAsync("You have received 3 or more rewards!");
    }
```

## How to Create New Rewards

Other addons can create new rewards using the `/scriptevent ds:add_reward` command. The command syntax is as follows:

`/scriptevent ds:add_reward "<reward_name>","<reward_description>",<reward_day>,<reward_repeat_day>,"<reward_id>","<studio_name>"`

### Field Explanation

- `“<reward_name>”`: The name of the reward. Must be enclosed in double quotes. Example: `“Iron Forging”`.
- `“<reward_description>”`: The description of the reward. Must be enclosed in double quotes. Example: `“Iron tools and equipment”`.
- `<reward_day>`: The specific day on which the reward is awarded. Must be an integer. Example: `3`.
- `<reward_repeat_day>`: The interval in days to repeat the reward. If not repeated, it must be `0`. Example: `7`.
- `“<reward_id>”`: The unique identifier of the reward. It must be enclosed in double quotes and follow the format `ds_r.<studio_namespace>.<unique_id>`. Example: `“ds_r.ovout_studios.cool_reward_21”`. This field also corresponds to the name of the loot_table you should use to define the reward loot. [Save Loot Table File](#save_loot_folder).
- `“<studio_name>”`: The name of the studio or creator of the reward. Must be enclosed in double quotes. Example: `“Ovout Studios”`.

### Important Considerations

- **Reward ID:** The `reward_id` must be unique for each reward. This ensures that there are no conflicts between different rewards.
- **Correct Format:** Make sure that all fields are in the correct format, especially the `reward_id`, which must follow the pattern `ds_r.<studio_namespace>.<unique_id>`.
- **Correct Implementation:** In order for the reward to be added correctly regardless of whether the **DS** addon is added to the world or not, you must make sure to constantly run this command, so we make sure that when **DS** is added then your reward is added correctly. Then you won't have to worry about anything else.

### <a name=“save_loot_folder”></a>Save Loot Table File
To define the loot of the reward, you must create a loot_table file corresponding to the reward_id and place it in the `DS/rewards/` path inside the loot_tables directory of your addon. For example, if your reward_id is `ds_r.ovout_studios.master_explorer`, you must create a loot table file `ds_r.ovout_studios.master_explorer.json` in the `loot_tables/DS/rewards/` path. 

Example:

```
loot_tables/
└── DS/
    └└── rewards/
        └──── ds_r.ovout_studios.master_explorer.json 
```

### Usage Example

Suppose you want to add a new reward called “Master Explorer” with the description “Diamond tools and armor”, which is awarded on day 15 and repeats every 30 days. Your command would be:

`/scriptevent ds:add_reward "Master Explorer","Diamond tools and armor",15,30,"ds_r.ovout_studios.master_explorer","Ovout Studios"`

## Implementing Rewards

To implement and activate the created rewards, follow these steps:

1. **Define the Reward:** Use the `/scriptevent ds:add_reward` command to define a new reward.
2. **Award Rewards:** The addon will take care of awarding the rewards to the players on the specified day and, if configured, it will repeat the reward according to the defined interval.

## Conclusion

The **Days Survived Counter Addon** not only provides a fun way to track days survived in Minecraft, but also allows creators of other addons to extend its functionality by adding custom rewards and even create custom events according to days survived, for example: Spawning an angry orc army when the player has survived 100 days. Be sure to follow the guidelines and formats mentioned above to ensure a smooth integration.


Developed by: **Syclone Studios** https://www.syclonestudios.com/

In collaboration with: **Ovout Studios** https://ovout.net/

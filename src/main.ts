import { getLocketMonsters, getMonsters, monsterFactoidsAvailable, print } from "kolmafia";
import { $locations } from "libram";

const timeTwitchingLocations = $locations`The Cave Before Time, An Illicit Bohemian Party, Moonshiners' Woods, The Roman Forum, The Post-Mall, The Spooky Old Abandoned Mine, The Rowdy Saloon, Globe Theatre Main Stage, Globe Theatre Backstage, KoL Con Clan Party House, 12 West Main`;
const locketMonsters = getLocketMonsters();

export default function main(): void {
  timeTwitchingLocations.forEach((location) => {
    print(`===${location.toString()}===`, "blue");

    getMonsters(location).forEach((monster) => {
      const monsterChecklist = {
        name: monster.name,
        copyable: monster.copyable,
        locket: Object.keys(locketMonsters).includes(monster.name),
        manuel: monsterFactoidsAvailable(monster, false),
      };

      print(`${monster.name}`);

      if ((monsterChecklist.copyable && !monsterChecklist.locket) || monsterChecklist.manuel < 3) {
        print(`Missing:`, "red");
        if (monsterChecklist.copyable && !monsterChecklist.locket) print(`• Locket Entry`, "red");
        if (monsterChecklist.manuel < 3)
          print(
            `• ${3 - monsterChecklist.manuel} Manuel Entr${
              3 - monsterChecklist.manuel > 1 ? "ies" : "y"
            }`,
            "red"
          );
      } else {
        print(`Done!`, "green");
      }
    });
    print();
  });
}

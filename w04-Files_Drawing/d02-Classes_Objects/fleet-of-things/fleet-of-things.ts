'use strict';

import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

let milk = new Thing('Get milk');
let obst = new Thing('Remove the obstacles');
let stand = new Thing('Stand up');
let lunch = new Thing('Eat lunch');

stand.complete();
lunch.complete();

fleet.add(milk);
fleet.add(obst);
fleet.add(stand);
fleet.add(lunch);

fleet.print();

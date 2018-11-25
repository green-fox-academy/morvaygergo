'use strict';

import { Thing } from "./thing";
export { Fleet };


class Fleet {
    private things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing) {
        this.things.push(thing);
    }
}

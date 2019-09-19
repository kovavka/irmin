import {SuitType, Tile} from "../types/Tile";

export class WallGenerator {
    static generate() {
        let tiles = this.initTiles()

        return this.shuffle(tiles).slice(0,30)
    }

    private static initTiles(): Tile[] {
        let tiles: Tile[] = []
        for (let i = 1; i < 10; i++) {
            this.addTileType(tiles, SuitType.MANZU, i)
            this.addTileType(tiles, SuitType.PINZU, i)
            this.addTileType(tiles, SuitType.SOUZU, i)

            if (i < 8) {
                this.addTileType(tiles, SuitType.JIHAI, i)
            }

        }
        return tiles
    }

    private static addTileType(tiles: Tile[], suit: SuitType, value: number) {
        let tile = <Tile>{
            suit,
            value,
        }

        tiles.push(tile)
        tiles.push(Object.assign({}, tile))
        tiles.push(Object.assign({}, tile))
        tiles.push(Object.assign({}, tile))
    }

    private static shuffle(tiles: Tile[]): Tile[] {
        return tiles.sort(function() {return 0.5 - Math.random()});
    }
}


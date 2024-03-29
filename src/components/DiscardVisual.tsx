import * as React from "react";
import {TileVisual} from "./TileVisual";
import {DiscardTile} from "../types/Tile";
import discard from '../img/tile-fallen.svg';
import {StateService} from '../services/StateService'

type DiscardState = {
    tiles: DiscardTile[]
}

//todo add subscribe to StateChanged
export class DiscardVisual extends React.Component<any, DiscardState> {
    stateService: StateService = StateService.instance

    constructor(props: any) {
        super(props)

        this.state = {
            tiles: this.stateService.discard
        }
    }

    componentDidMount(): void {
        this.stateService.onHandChanged.add(this.updateState, this)
    }

    componentWillUnmount(): void {
        this.stateService.onHandChanged.remove(this.updateState, this)
    }

    updateState() {
        this.setState({
            tiles: this.stateService.discard
        })
    }

    getDiscard() {
        let lines = [
                this.state.tiles.slice(0,6),
                this.state.tiles.slice(6,12),
                this.state.tiles.slice(12,18),
            ]
        return lines.map(line => {
            return (
                <div className={'discard__line'}>
                    {line.map(this.getTile)}
                </div>
            )
        })
    }

    getTile(tile: DiscardTile) {
        return (
            <TileVisual tile={tile} isTsumo={false} highlighted={tile.tsumogiri} isFallen={true} selectable={false} hidden={false} />
        )
    }

    render() {
     return (
         <div className={'discard'}>
             {this.getDiscard()}
         </div>
     )
    }
}
import * as React from "react";
import {HandVisual} from '../components/HandVisual'
import {DiscardVisual} from '../components/DiscardVisual'
import {StateService} from '../services/StateService'

export class FailScreen extends React.Component {
    stateService: StateService = StateService.instance

    onNewGameClick() {
        this.stateService.nextScreen()
    }

    render() {
        return (
            <div>
                <div className={'page-header'}>
                    <div className={'page-header__title'}>
                        FAIL
                    </div>
                </div>
                <div className={'page-content'}>
                    <div className={'button-container'}>
                        <div className={'flat-btn flat-btn--white'} >
                            <div className={'flat-btn__caption'} onClick={() => this.onNewGameClick()}>New game</div>
                        </div>
                    </div>

                    <HandVisual selectable={false} reverse={false} hiddenTiles={false}/>
                    <DiscardVisual/>
                </div>
            </div>
        )
    }
}
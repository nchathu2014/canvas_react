import React from 'react';
import KalturaPlayer from './KalturaPlayer'

var ViewComponent = React.createClass({

    handleOnClick:function(){
       $('.rightDiv').toggleClass('expandRightDiv');//toggling the rightSide div width
       $('.expandImage').toggleClass('rotate180Deg');//toggling view icon (0 to 180 deg)
       $(".popUpModal").hide();//hide popup dialog when view arrow clicked
    },
    render:function(){
        return(
            <div>
                <div className="shadow">
                    <div className="view-title">
                      <span className="img-sep">
                            <img src="../img/icon-expand.svg"  className="expandImage" alt="expand icon" onClick={this.handleOnClick}/>
                      </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;Student View
                    </div>
                    <div  className="dash-line">
                        <div className="row">
                            <div className="col-lg-8 dash-horizontal">
                                <b>Title</b>
                            </div>
                            <div className="col-lg-4">
                                <b> Date : </b>12/09/2015
                            </div>
                        </div>
                    </div>
                    <div  className="dash-line">
                        <div className="row">
                            <div className="col-lg-12">
                                <b> Learning Objective :</b>
                            </div>
                        </div>
                    </div>
                    <div  className="dash-line">
                        <div className="row">
                            <div className="col-lg-12">
                                <b>Description :</b>
                            </div>
                        </div>
                    </div>
                    <div id="dynamicDiv">
                        <div className="row">
                            <div className="col-lg-6" id="kalturaWrapper">
                                <KalturaPlayer player_id="32595032"
                                   wid="1990241"
                                   uiconf_id="32595032"
                                   entry_id="0_rgvury8x"
                                   pl_width="500"
                                   pl_height="400">
                                </KalturaPlayer>
                            </div>
                            <div className="col-lg-6">
                                Question Area
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default ViewComponent
var ViewComponent = React.createClass({

    widthChange:function(){
        console.log("widthChange fired");

       $('.rightDiv').toggleClass('expandRightDiv');


    },

    render:function(){
        return(
            <div>
                <div className="shadow">
                    <div className="view-title">
                      <span className="img-sep">

                              <img src="img/icon-expand.svg"  className="expandImage" alt="expand icon" onClick={this.widthChange}/>

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
                            <div className="col-lg-6">
                                <iframe width="100%" height="380" src="https://www.youtube.com/embed/8HkVHbJZeWY" frameborder="0" allowfullscreen></iframe>
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
var CanvasComponent = React.createClass({

    popUpClose:function(){
        $(".popUpModal").show().hide("slide", {direction: "right" }, 500 );//slide animated to popup dialog
    },
    render:function(){
        return(

            <div className="container-fluid">

                <div className="row">

                    <div className="col-lg-3">
                        <h3>Build a Quiz/Poll</h3>
                    </div>

                    <div className="col-lg-9">
                        <button type="button" className="btn btn-md btn-primary">Save as Draft</button>
                        <button type="button" className="btn btn-md btn-primary">Publish</button>
                    </div>
                </div>

                <div className="row">

                    <div className="col-lg-3 leftDiv">
                        <MenuComponent/>
                    </div>

                    <div className="col-lg-9 rightDiv">
                        <ViewComponent/>
                    </div>
                </div>

                {/*popup modal*/}
                <div className="popUpModal">
                    <button type="button" className="close pull-left"  onClick={this.popUpClose} data-dismiss="modal" aria-hidden="true">×</button>
                </div>

            </div>

        );
    }
});
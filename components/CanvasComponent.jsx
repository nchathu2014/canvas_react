var CanvasComponent = React.createClass({

    popUpClose:function(){
        $(".popUpModal").show().hide("slide", {direction: "right" }, 500 );//slide animated to popup dialog
    },
    render:function(){
        return(

            <div className="container-fluid canvasWrapper">
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
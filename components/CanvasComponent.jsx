var CanvasComponent = React.createClass({
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
            </div>

        );
    }
});
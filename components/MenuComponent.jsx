var MenuComponent = React.createClass({

    widthChange:function(){
        console.log("widthChange fires 1");
        $('.rightDiv').removeClass('expandRightDiv');
        $('.expandImage').removeClass('rotate180Deg')
    },

    render:function(){
        return(
         <div>
             <h4 className="text-center">QUIZ/POLL DETAIL</h4>

             <button className="btn btn-default" onClick={this.widthChange}>
                 <span className="glyphicon glyphicon-plus">&nbsp;</span>
                 Title*
             </button>
             <div className="space-divider">&nbsp;</div>
             <button className="btn btn-default">
                 <span className="glyphicon glyphicon-plus">&nbsp;</span>
                 Due Date*
             </button>
             <div className="space-divider">&nbsp;</div>
             <button className="btn btn-default">
                 <span className="glyphicon glyphicon-plus">&nbsp;</span>
                 Learning Objectives
             </button>
             <div className="space-divider">&nbsp;</div>
             <button className="btn btn-default">
                 <span className="glyphicon glyphicon-plus">&nbsp;</span>
                 Description
             </button>

             <h4 className="text-center">QUIZ/POLL ACTIVITY</h4>

             <button className="btn btn-default">
                 <span className="glyphicon glyphicon-plus">&nbsp;</span>
                 Add Media
             </button>
             <div className="space-divider">&nbsp;</div>
             <button className="btn btn-default">
                 <span className="glyphicon glyphicon-plus">&nbsp;</span>
                 Add Questions
             </button>

             <h4 className="text-center">SETTINGS</h4>

             <button className="btn btn-default">
                 <span className="glyphicon glyphicon-plus">&nbsp;</span>
                 Grading Options
             </button>
             <div className="space-divider">&nbsp;</div>
         </div>
        );
    }
});
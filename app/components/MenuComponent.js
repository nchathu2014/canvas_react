import React from 'react';

var MenuComponent = React.createClass({

    handleOnClick:function(){
        $('.rightDiv').removeClass('expandRightDiv');//make the rightSide div to initial width
        $('.expandImage').removeClass('rotate180Deg');//reset icon into initial state (0 deg)
        $(".popUpModal").css("width",$('.menu-btn').width()+'px'); //make the popup window width relative to menu item width
        $(".popUpModal").hide().show("slide", {direction: "right" }, 500 );//slide animated to popup dialog
        $('.menu-span').addClass('glyphicon glyphicon-pencil');//change menu button icon when its clicked

    },
    render:function(){
        return(
         <div>
             <h4 className="text-center">QUIZ/POLL DETAIL</h4>

             <button className="btn btn-default menu-btn" onClick={this.handleOnClick}>
                 <span className="glyphicon glyphicon-plus menu-span">&nbsp;</span>
                 Title*
             </button>
             <div className="space-divider">&nbsp;</div>
             <button className="btn btn-default  menu-btn">
                 <span className="glyphicon glyphicon-plus">&nbsp;</span>
                 Due Date*
             </button>
             <div className="space-divider">&nbsp;</div>
             <button className="btn btn-default  menu-btn">
                 <span className="glyphicon glyphicon-plus">&nbsp;</span>
                 Learning Objectives
             </button>
             <div className="space-divider">&nbsp;</div>
             <button className="btn btn-default  menu-btn">
                 <span className="glyphicon glyphicon-plus">&nbsp;</span>
                 Description
             </button>

             <h4 className="text-center">QUIZ/POLL ACTIVITY</h4>

             <button className="btn btn-default  menu-btn">
                 <span className="glyphicon glyphicon-plus">&nbsp;</span>
                 Add Media
             </button>
             <div className="space-divider">&nbsp;</div>
             <button className="btn btn-default  menu-btn">
                 <span className="glyphicon glyphicon-plus">&nbsp;</span>
                 Add Questions
             </button>

             <h4 className="text-center">SETTINGS</h4>

             <button className="btn btn-default  menu-btn">
                 <span className="glyphicon glyphicon-plus">&nbsp;</span>
                 Grading Options
             </button>
             <div className="space-divider">&nbsp;</div>
         </div>
        );
    }
});

export default MenuComponent
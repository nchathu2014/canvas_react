import React from 'react';

    var href=null;
    
    var KalturaPlayer = React.createClass({

        propTypes:{
            player_id:React.PropTypes.string.isRequired,
            wid:React.PropTypes.string.isRequired,
            uiconf_id:React.PropTypes.string.isRequired,
            entry_id:React.PropTypes.string.isRequired
        },
        getIntialState:function(){
            return{
                kPlayer:"off"
            }
        },
        componentWillMount:function() {
            href="http://www.kaltura.com/p/"+this.props.wid+"/sp/"+this.props.wid+"00/embedIframeJs/uiconf_id/"+this.props.uiconf_id+"/partner_id/"+this.props.wid+"?iframeembed=true&playerId="+this.props.player_id+"&entry_id="+this.props.entry_id;        
        },
        render:function(){
            
            return(
                <div id="kalturaWrapper" ref="kp">
                   <iframe src={href} width={this.props.pl_width} height={this.props.pl_height} allowFullScreen webkitallowfullscreen mozAllowFullScreen frameBorder="0"></iframe>
                </div>
            );
        },
        componentDidMount:function(){
            this.setState({
                kPlayer:"on"
            });
        }
    });

export default KalturaPlayer
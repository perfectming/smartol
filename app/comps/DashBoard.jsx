import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions'
import styles from './Dashboard.scss';

let Component = React.createClass({
    componentWillMount() {
        
    },
    componentDidMount() {
        // let{data9} = this.props;
        
        
    },
    componentWillUnmount() {
        
    },
    componentWillUpdata() {
        
       
    },
    componentDidUpdate() {
        this.props.init();
    },
    render() {
        let{indexName} = this.props;
        let csp = 100; // 车速
        
        // if(csp > 120){
        //     csp = 120
        // }
        // $("#carsp2").animate({ deg: csp*1.5}, {
        //             step: function(now,fx) {
        //             // $(this).css('transform-origin','93% 50%');
        //             $(this).css('transform','rotate('+now+'deg)');
        //             },

        //         },20)
        // if(zsp >= 3000){
        //     zsp = 3000;
        // }
        // $("#zspeed2").animate({ textIndent: 0 }, {
        //             step: function(now,fx) {
        //             // $(this).css('transform-origin','93% 50%');
        //             $(this).css('transform','rotate('+(zsp/100)*6+'deg)');
        //             },
        //         },100)
        return (
           
            <div className={styles.speedBox}>
                <div className={styles.speed}>
                    <div className={styles.speedLeft}>
                        <b>{indexName}</b>
                        <div className={styles.wsdialbox}>
                            <div id="carsp2" className={styles.wsipbox}></div>
                        </div>
                        <p><span>{csp}</span></p>
                        <i>km/h</i>
                    </div>
                    
                </div>
            </div>
            
        );
        
    }
});


const mapStateToProps = (state) => {
    return {
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            let csp = 100; // 车速
        
            if(csp > 120){
                csp = 120
            }
            $("#carsp2").animate({ deg: csp*1.5}, {
                        step: function(now,fx) {
                            console.log(now)
                        // $(this).css('transform-origin','93% 50%');
                        $(this).css('transform','rotate('+now+'deg)');
                        },
                        duration:200
                    })
                        // console.log(1212121212212)
            
        },
        
       
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);

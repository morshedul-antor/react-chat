import React from 'react'
import classes from './Chat.module.css'

export default function Chat() {
    return (
        <div className={classes.container}>
            <div className={classes.chatbox}>
                <div className={classes.topBar}>
                    <div className={classes.avatar}>
                        <p>V</p>
                    </div>
                    <div className={classes.name}>Voldemort</div>
                    <div className={classes.icons}>
                        {/* <i className={classes.fas fa-phone}></i> */}
                        {/* <i className={classes.fas fa-video}></i> */}
                    </div>
                    <div className={classes.menu}>
                        <div className={classes.dots}></div>
                    </div>
                </div>
                <div className={classes.middle}>
                    <div className={classes.voldemort}>
                        <div className={classes.incoming}>
                            <div className={classes.bubble}>Hey, Father's Day is coming up..</div>
                            <div className={classes.bubble}>What are you getting.. Oh, oops sorry dude.</div>
                        </div>
                        <div className={classes.outgoing}>
                            <div className={`${classes.bubble} ${classes.lower}`}>Nah, it's cool.</div>
                            <div className={classes.bubble}>
                                Well you should get your Dad a cologne. Here smell it. Oh wait! ...
                            </div>
                        </div>
                        <div className={classes.typing}>
                            <div className={classes.bubble}>
                                <div className={`${classes.ellipsis} ${classes.one}`}></div>
                                <div className={`${classes.ellipsis} ${classes.two}`}></div>
                                <div className={`${classes.ellipsis} ${classes.three}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.bottomBar}>
                    <div className={classes.chat}>
                        <input type="text" placeholder="Type a message..." />
                        <button type="submit"> {/* <i className={classes.fas fa-paper-plane}></i> */} </button>
                    </div>
                </div>
            </div>
            {/* <div className={classes.messages}></div>
                <div className={classes.profile}>
                    <div className={classes.avatar}>
                        <p>H</p>
                    </div>
                    <div className={classes.name2}>
                        Harry<p className={classes.email}>Harry@potter.com</p>
                    </div>
                </div>
                <ul className={classes.people}>
                    <li className={classes.person focus}>
                        <span className={classes.title}>Voldemort </span>
                        <span className={classes.time}>2:50pm</span>
                        <br />
                        <span className={classes.preview}>What are you getting... Oh, oops...</span>
                    </li>
                    <li className={classes.person}>
                        <span className={classes.title}>Ron</span>
                        <span className={classes.time}>2:25pm</span>
                        <br />
                        <span className={classes.preview}>Meet me at Hogsmeade and bring...</span>
                    </li>
                    <li className={classes.person}>
                        <span className={classes.title}>Hermione</span>
                        <span className={classes.time}>2:12pm</span>
                        <br />
                        <span className={classes.preview}>Have you and Ron done your hom...</span>
                    </li>
                </ul> */}
        </div>
    )
}

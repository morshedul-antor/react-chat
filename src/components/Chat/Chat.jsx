import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Pic from '../../assets/chat.png'
import classes from './Chat.module.css'

export default function Chat() {
    const [chats, setChats] = useState([])
    const [message, setMessage] = useState('')

    const id = 2
    const receiver_id = 1

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/v1/chats/${id}/${receiver_id}`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        // Authorization: `Bearer ${token}`,
                    },
                })

                const data = await response.json()

                if (response.ok) {
                    setChats(data)
                }
            } catch {}
        }
        fetchData()

        const interval = setInterval(fetchData, 1000)
        return () => clearInterval(interval)
    }, [])

    const handleSubmit = async () => {
        const details = {
            message: message,
            sender_id: id,
            receiver_id: receiver_id,
        }

        if (message.length > 1) {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/v1/chats/`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(details),
                })

                const log = await response.json()

                if (response.ok) {
                    setMessage('')
                } else {
                    alert(log.context + '!')
                }
            } catch {
                alert('Please check your internet connection!')
            }
        }
    }

    return (
        <div className={classes.main}>
            <div className={classes.chat}>
                <div className={classes.head}>
                    <img src={Pic} alt="pic" />
                    <div>
                        <p>Tony Stark</p>
                        <span>10:10 AM</span>
                    </div>
                </div>
                <div className={classes.body}>
                    {chats &&
                        chats.map((chat) => (
                            <p className={chat.sender_id !== id ? classes.receiver : classes.sender}>{chat.message}</p>
                        ))}
                </div>
                <div className={classes.footer}>
                    <div className={classes.icon}>
                        <FontAwesomeIcon icon={faPaperclip} />
                    </div>
                    <div className={classes.message}>
                        <input
                            type="text"
                            placeholder="type message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div
                        className={classes.send}
                        onClick={() => {
                            handleSubmit()
                            setMessage('')
                        }}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                </div>
            </div>
        </div>
    )
}

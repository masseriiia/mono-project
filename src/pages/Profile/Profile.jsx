import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import styles from './Profile.module.css'

export function Profile() {
    return (
        <div>
            <Header/>
            <div className={styles['sidebar']}>
                <Button className={styles['button-push']}>
                    <img src="./push.svg" alt="" />
                </Button>
            </div>
            <div className={styles['user']}>
                <div className={styles['user-info']}>
                    <img className={styles['user-img']} src="./avatar.png" alt="" />
                    <p className={styles['user-name']}>Random User</p>
                    <p className={styles['user-id']}>@random_user</p>
                </div>
                <div className={styles['settings']}>
                    <div className={styles['setting-item']}>
                        <div className={styles['setting-diamond']}>
                            <img src="./diamond.svg" width="33px" height="27px" alt="" />  
                        </div>
                        <p className={styles['setting-name']}>Invite Friends</p>
                    </div>
                    <div className={styles['setting-item']}>
                        <div className={styles['setting-image']}>
                            <img src="./user.svg" alt="" />
                        </div>
                        <p className={styles['setting-name']}>Account info</p>
                    </div>
                    <div className={styles['setting-item']}>
                        <div className={styles['setting-image']}>
                            <img src="./users.svg" alt="" />
                        </div>
                        <p className={styles['setting-name']}>Personal profile</p>
                    </div>
                    <div className={styles['setting-item']}>
                        <div className={styles['setting-image']}>
                            <img src="./message.svg" alt="" />
                        </div>
                        <p className={styles['setting-name']}>Message center</p>
                    </div>
                    <div className={styles['setting-item']}>
                        <div className={styles['setting-image']}>
                            <img src="./security.svg" alt="" />
                        </div>
                        <p className={styles['setting-name']}>Login and security</p>
                    </div>
                    <div className={styles['setting-item']}>
                        <div className={styles['setting-image']}>
                            <img src="./privace.svg" width="33px" height="27px" alt="" />  
                        </div>
                        <p className={styles['setting-name']}>IData and privacy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
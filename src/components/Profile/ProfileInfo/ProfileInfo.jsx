import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large} alt=""/>

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    )
}
export default ProfileInfo
import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        if (this.props.isAuth === false) return  <Redirect to={'/login'}/>
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
})



//export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
//compose оборачивает компоненту из вторых скобок в функции первой скобки по очереди
export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),//3
    withRouter,//2
    withAuthRedirect)//1 в очереди
(ProfileContainer)
import React, {useEffect} from "react";
import {SearchBlock} from "../SearchBlock";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {TRootState} from "../../../redux/rootReducer";
import {userDataAsyncRequest} from "../../../redux/userData/userDataAction";

interface IProps {
    token: string;
    userDataAsyncRequest: () => void;
}


function SearchBlockContainer(props: IProps) {
    const {token, userDataAsyncRequest} = props;
    useEffect(() => {
        if (!token || token === "undefined") return;
        userDataAsyncRequest();
    }, [token])

    return (
        <SearchBlock/>
    )
}

const mapStateToProps = (state: TRootState) => {
    return {
        token: state.userData.token,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        userDataAsyncRequest: bindActionCreators(userDataAsyncRequest, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBlockContainer);

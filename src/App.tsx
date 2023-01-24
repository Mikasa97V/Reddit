import React, {useEffect} from "react";
import './main.global.css';
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {connect} from "react-redux";
import {saveToken} from "./redux/userData/userDataAction";
import {bindActionCreators} from "redux";
import CardsList from "./shared/CardsList/CardsList";
import {Navigate, Route, Routes} from "react-router-dom";
import PostModal from "./shared/PostModal/PostModal";
import {NotFoundPage} from "./shared/NotFoundPage";

interface IProps {
    saveToken: () => void;
}

function AppComponent(props: IProps) {
    const {saveToken} = props

    useEffect(() => {
        saveToken();
    }, []);

    return (
        <Layout>
            <Header/>
            <Content>
                <Routes>
                    <Route path='/posts/:id' element={<PostModal/>}/>
                    <Route path='/auth' element={<Navigate to='/posts' replace/>}/>
                    <Route path='/' element={<Navigate to='/posts' replace/>}/>
                    <Route path='/posts' element={<CardsList/>}/>
                    <Route path='*' element={<NotFoundPage />}/>
                </Routes>
            </Content>
        </Layout>
    );
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        saveToken: bindActionCreators(saveToken, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(AppComponent);

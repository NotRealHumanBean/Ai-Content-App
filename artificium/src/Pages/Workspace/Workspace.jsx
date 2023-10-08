import React, { Component } from 'react'
import styles from './Workspace.module.scss';
import Triangle from '../../components/workspaceComp/TriangleIcom/Triangle'
import Footer from '../../components/workspaceComp/FooterComp/footer'
import Join from '../../components/workspaceComp/JoinComp/Join'

function Workspace() {
    return (
        <div className={styles.workspace}>
            <div className={styles.workspaceContent}>
                <Triangle />
                <Join />
                <Footer />
            </div>
            <div className={styles.workspaceImage}></div>
        </div>        
    )
}
export default Workspace;
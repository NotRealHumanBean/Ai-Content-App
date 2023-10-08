import React, { Component } from 'react'
import styles from './Workspace.module.scss';
import Triangle from '../../components/workspaceComp/TriangleIcom/Triangle'
import Footer from '../../components/workspaceComp/FooterComp/footer'

function Workspace() {
    return (
        <div className={styles.workspace}>
            <div className={styles.workspaceContent}>
                <Triangle />
                <Footer />
            </div>
            <div className={styles.workspaceImage}></div>
        </div>        
    )
}
export default Workspace;
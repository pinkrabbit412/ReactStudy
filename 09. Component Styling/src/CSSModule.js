import styles from "./CSSModule.module.scss"

const CSSModule = () => {
    return(
        <div className="componentWrapper">
            대표 퍼스널 컬러는 <strong className={`${styles.pinkText} ${styles.blackBackground}`}>악동 핑크(#FCACD3)</strong> 입니다.
        </div>
    );
}

export default CSSModule;
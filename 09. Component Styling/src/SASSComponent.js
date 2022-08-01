import "./SASSComponent.scss";

const SASSComponent = () => {
    return(
        <div className="componentWrapper">
            <div className="sassComponent">
                <div className="box red">빨간색</div>
                <div className="box orange">주황색</div>
                <div className="box yellow">노란색</div>
                <div className="box green">초록색</div>
                <div className="box blue">파란색</div>
                <div className="box indigo">남색</div>
                <div className="box purple">보라색</div>
            </div>
        </div>
    );
};

export default SASSComponent;
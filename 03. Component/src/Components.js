import { Component } from 'react';
import PropTypes from 'prop-types';

class Components extends Component {
    render() {
        const { children, name, favorite_number} = this.props;
        return (
            <>
            <div>컴포넌트가 호출되었습니다.</div>
            <br />
            <div>{name}님, 환영합니다.</div>
            <br />
            <div>{children}</div>
            <br />
            <div>제가 좋아하는 숫자는 {favorite_number} 입니다.</div>
            </>
        );
    }
    static defaultProps = {
        name: "<이름>"
    };
    /* 
    * propTypes에는 다음과 같은 종류가 있음
    * array, arrayOf(PropTypes)[특정 자료형으로만 구성된 배열], bool, func, number,
    * object, string, symbol[ES6 Symbol], node[렌더링 가능한 모든 PropTypes],
    * instanceOf(class)[특정 클래스 인스턴스], oneOf(array)[주어진 배열 내의 값 중 하나],
    * oneOfType(array)[주어진 배열 내의 PropTypes 중 하나], objectOf(PropTypes)[모든 키 값이 지정한 PropTypes인 객체]
    * object({<스키마>})[주어진 스키마를 가진 객체], any
    */
    static propTypes = {
        name: PropTypes.string,
        favorite_number: PropTypes.number.isRequired
    };
};

export default Components;
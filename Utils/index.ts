import { ShallowWrapper } from "enzyme"
import PropTypes from "prop-types"
import rootRedcer from '../src/reducers'
import { applyMiddleware } from "redux"

export const findByTestAtrr = (component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>, attr: string) => {
    const wrapper = component.find(`[data-test='${attr}']`) //data-test пишется в разметки что бы было понятно что это для тестов
    return wrapper
}

export const checkProps = (component: any, expectedProps: any) => {

  const propsErr = PropTypes.checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );
  return propsErr;
};


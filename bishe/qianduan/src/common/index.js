import _ from 'lodash';

export const updateState = (target, source) => {
    let newTarget = { ...target };
    for (let sKey in source) {
      if (source.hasOwnProperty(sKey)) {
        if (newTarget[sKey]) {
          if (newTarget.hasOwnProperty(sKey)) {
            if (_.isArray(source[sKey])&&_.isArray(newTarget[sKey])) {
              newTarget[sKey] = [].concat(source[sKey]);
            } else if (_.isFunction(source[sKey])&&_.isFunction(newTarget[sKey])) {
              newTarget[sKey] = source[sKey];
            } else if (_.isObject(source[sKey])&&_.isObject(newTarget[sKey])) {
              newTarget[sKey] = updateState(newTarget[sKey], source[sKey]);
            } else {
              newTarget[sKey] = source[sKey];
            }
          }
        } else {
          newTarget[sKey] = source[sKey];
        }
      }
    }
    return newTarget;
  }
/**
 * <Key key={'2333'} />
 *
 * 在 Key 组件内部并拿不到 props.key 这个 property
 */

import React from 'react';

const Key: React.SFC<{}> = props => <div>{JSON.stringify(props)}</div>;

export default Key;

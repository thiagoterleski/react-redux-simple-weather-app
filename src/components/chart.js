import React,{Component} from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default (props) => {
    return (
      <Sparklines height={150} data={props.data}>
        <SparklinesLine color="{props.color}" />
        <SparklinesReferenceLine type="avg" />
        <div>{average(props.data)} ({props.affix})</div>
      </Sparklines>
    )
};

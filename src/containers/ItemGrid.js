// @flow

import React, {Fragment} from 'react';
import styled from 'fannypack/styled';
import { Grid } from 'fannypack';
import GridItem from '../ui/GridItem';

// type Props = {
//   columns?: Object,
//   error?: ?Object,
//   isError?: boolean,
//   isLoading?: boolean,
//   isSuccess?: boolean,
//   items: Array<Object>,
//   onSelectItem: Function,
//   paginationProps: Object
// };

const ItemGrid = ({
  title,
  data
}: Props) => {
    return (
        <Grid templateColumns="repeat(2, 1fr)" fontSize='25px' autoRows="auto" margin='auto'>
            <Grid.Item columnStart='1' columnEnd='3'><strong>{title}</strong></Grid.Item>
            {Object.entries(data).map(([key,value], index)=>{
                if(index%2===0){
                    return (
                        <Fragment key={index}>
                            <GridItem isTinted isLeft>{key}</GridItem>
                            <GridItem isTinted isRight>{value.toString()}</GridItem>
                        </Fragment> 
                    );
                }
                else{
                    return (
                        <Fragment key={index}>
                            <GridItem>{key}</GridItem>
                            <GridItem>{value.toString()}</GridItem>
                        </Fragment>
                    );                    
                }                
            })}
        </Grid>
    );
};

// ItemGrid.defaultProps = {
//   columns: { date: 'Date', who: 'Who', subject: 'Subject', status: 'Status' },
//   error: null,
//   isError: false,
//   isLoading: false,
//   isSuccess: false,
//   items: null,
//   onSelectItem: () => {}
// };

export default ItemGrid;

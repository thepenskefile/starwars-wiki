// @flow
import React, { Fragment } from 'react';
import { Columns, Box, Heading } from 'fannypack';
import Column from '../ui/Column';

type Props = {
  title: string,
  data: Object
};

const ItemDetails = ({ title, data }: Props) => {
  return (
    <Box fontSize="25px" margin="auto">
      <Heading use="h3" margin="10px">
        {title}
      </Heading>
      <Columns>
        {Object.entries(data).map(([key, value], index) => {
          if (index % 2 === 0) {
            return (
              <Fragment key={index}>
                <Column spread={6} isTinted isLeft>
                  {key}
                </Column>
                <Column spread={6} isTinted isRight>
                  {value.toString()}
                </Column>
              </Fragment>
            );
          } else {
            return (
              <Fragment key={index}>
                <Column spread={6}>{key}</Column>
                <Column spread={6}>{value.toString()}</Column>
              </Fragment>
            );
          }
        })}
      </Columns>
    </Box>
  );
};

export default ItemDetails;

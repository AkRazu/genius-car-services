import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({title}) => {
    return (
        <Helmet>
        <title>{title} -The Car Doctor</title>
      </Helmet>
    );
};

export default PageTitle;
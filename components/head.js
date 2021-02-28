import Head from 'next/head';
import PropTypes from 'prop-types';

const head = props => {
    const { title } = props;
    return (
        <Head>
            <title>{ title }</title>
            <meta charSet="UTF-8" />
            <meta name="description" content="Shashi's Portfolio Home" />
            <meta name="keywords" content="Web Developer, Front end Developer, Full stack Developer, Javascript" />
            <meta name="author" content="Shashidhar Reddy" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
            <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossorigin="anonymous"></script>
        </Head>
    );
};

head.propTypes = {
    title: PropTypes.string
};

export default head;
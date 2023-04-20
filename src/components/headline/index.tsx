import React, { Component } from 'react';
import PropTypes from 'prop-types';

export interface HeadlineProps {
    header?: string;
    descr?: string;
    tempArr?: Array<{
        fName: string,
        lName: string,
        email: string,
        age: number,
        onlineStatus: boolean
    }>
}



class HeadLine extends Component<HeadlineProps> {
    constructor(props: HeadlineProps) {
        super(props);
    }

    static propTypes = {
        header: PropTypes.string,
        descr: PropTypes.string,
        tempArr: PropTypes.arrayOf(
            PropTypes.shape({
                fName: PropTypes.string,
                lName: PropTypes.string,
                email: PropTypes.string,
                age: PropTypes.number,
                onlineStatus: PropTypes.bool,
            })
        ),
    };

    render(): React.ReactNode {
        const { header, descr } = this.props;

        if (!header || !descr) {
            return null;
        }
        return (
            <div data-test="HeadLineComponent">
                <h1 data-test='header'>{header}</h1>;
                <p data-test='descr'>{descr}</p>
            </div>
        )
    }
}

export default HeadLine;


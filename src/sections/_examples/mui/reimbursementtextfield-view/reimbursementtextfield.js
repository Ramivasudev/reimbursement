import PropTypes from 'prop-types';
// @mui
import Masonry from '@mui/lab/Masonry';
import TextField from '@mui/material/TextField';
//
import ComponentBlock from '../../component-block';

// -------------------------------------------  ---------------------------

export default function ReimbursementTextfield({ variant }) {

    return (
        <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
            <ComponentBlock title="Personal Details">

                <TextField
                    variant={variant}
                    fullWidth
                    label="First Name"
                    defaultValue=""
                />

                <TextField
                    variant={variant}
                    fullWidth
                    label="Middle Name"
                    defaultValue=""
                />

                <TextField
                    variant={variant}
                    fullWidth
                    label="Last Name"
                    defaultValue=""
                />

                <TextField
                    variant={variant}
                    fullWidth
                    label="Employee I'd"
                    defaultValue=""
                />

                <TextField
                    variant={variant}
                    fullWidth
                    label="Employee Role"
                    defaultValue=""
                />

                <TextField
                    variant={variant}
                    fullWidth
                    label="Department"
                    defaultValue=""
                />

            </ComponentBlock>

            <ComponentBlock title="Project Details">

                <TextField
                    variant={variant}
                    fullWidth
                    label="Project Name"
                />

                <TextField
                    variant={variant}
                    fullWidth
                    label="Project I'd"
                />

                <TextField
                    variant={variant}
                    fullWidth
                    multiline
                    label="Purpose"
                />

                <TextField
                    variant={variant}
                    fullWidth
                    label="Starting Date"
                />

                <TextField
                    variant={variant}
                    fullWidth
                    label="Ending Date"
                />

                <TextField
                    variant={variant}
                    fullWidth
                    label="From"
                />

                <TextField
                    variant={variant}
                    fullWidth
                    label="To"
                />

            </ComponentBlock>

            <ComponentBlock title="Files">

                <TextField
                    variant={variant}
                    required
                    fullWidth
                    label="Project Name"
                />

                

            </ComponentBlock>
        </Masonry>
    );
}

ReimbursementTextfield.propTypes = {
    variant: PropTypes.string,
};

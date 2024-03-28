import PropTypes from 'prop-types';
// @mui
import Masonry from '@mui/lab/Masonry';
import TextField from '@mui/material/TextField';
//
import AddTripRadioButtonPage from 'src/pages/components/mui/addtripradio-button';
import ComponentBlock from '../../component-block';

// ----------------------------------------------------------------------

export default function AddTripTextfield({ variant }) {

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

        <TextField
          variant={variant}
          fullWidth
          label="Date of Birth"
          defaultValue=""
        />

        <TextField
          variant={variant}
          fullWidth
          label="Age"
          defaultValue=""
        />

        <TextField
          variant={variant}
          fullWidth
          label="Gender"
          defaultValue=""
        />

        <TextField
          variant={variant}
          fullWidth
          label="Email"
          defaultValue=""
        />

        <TextField
          variant={variant}
          fullWidth
          label="Contact"
          defaultValue=""
        />

      </ComponentBlock>

      <ComponentBlock title="Project Details">

        <TextField
          variant={variant}
          required
          fullWidth
          label="Project Name"
        />

        <TextField
          variant={variant}
          required
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
          required
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Starting Date"
          type='date'
        />

        <TextField
          variant={variant}
          required
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Ending Date"
          type='date'
        />

        <TextField
          variant={variant}
          required
          fullWidth
          label="From"
        />

        <TextField
          variant={variant}
          required
          fullWidth
          label="To"
        />

      </ComponentBlock>

      <ComponentBlock title="Client Details">

        <TextField
          variant={variant}
          required
          fullWidth
          label="Client Name"
        />

        <TextField
          variant={variant}
          required
          fullWidth
          label="Company Name"
        />

        <TextField
          variant={variant}
          required
          fullWidth
          label="Client's Email"
        />

        <TextField
          variant={variant}
          required
          fullWidth
          label="Client's Contact Number"
        />

      </ComponentBlock>

      <ComponentBlock title="Accommodation">

        <AddTripRadioButtonPage />

      </ComponentBlock>
    </Masonry>
  );
}

AddTripTextfield.propTypes = {
  variant: PropTypes.string,
};

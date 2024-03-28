// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';


export default function HomeView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>

      <Typography variant="h4"> Home Page </Typography>

      <Box
        sx={{
          mt: 5,
          width: 1,
          height: 1,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `1px dashed ${theme.palette.divider}`,
        }}
      >
        <Box sx={{ p: 5, borderRadius: 2, color: "text.secondary" }}>

          <Typography variant="h3" color="text.primary">
            Vision
          </Typography>
          <p color="text.primary">&quot;Our vision is to cultivate a sustainable information technology infrastructure, pioneering the design of highly scalable IT solutions and delivering exceptional integration services to our valued customers.&quot;</p>
          <p>
             We deliver quality Products and Services with focus on integrating the same with existing technologies, providing the required automation to our customers to help them achieve their Business Objectives.
          </p>
          <p>
            To develop a sustainable information technology infrastructure, to design the most scalable IT solutions and to provide excellent integration services for our Customers.
          </p>
          <p>
            To become the most preferred technology integrator and serve institutional and corporate India with multi-platform, vendor independent information and communication technology solutions.
          </p>

          <Typography variant="h5" mt={2} color="text.primary">
            Our Key Factors:
          </Typography>
          <p>
            <ul>
              <li>Justifying need of the solution desired.</li>
              <li> Protection of Investment.</li>
              <li> Return on Investment. </li>
              <li>Ensuring &apos;Longevity&apos; of the solution/ investment.</li>
              <li>Ensuring &apos; Quality of Service&apos;</li>


            </ul>
          </p>

          <Typography variant="h3" mt={2} color="text.primary">
            Mission
          </Typography>

          <p>
           &quot; Our mission is to deliver cutting-edge yet affordable IT solutions tailored to businesses, positioning ourselves as the premier technology integrator of choice for institutional and corporate clients across India. We are committed to laying the foundation for our clients&apos; success by understanding their unique requirements, implementing best practices, and continually developing our staff&apos;s core competencies.&quot;
          </p>

          <Typography variant="h5" mt={2} color="text.primary">
            Core Values:
          </Typography>
          <p>
            <ul>
              <li> Innovation and Affordability: We strive to offer innovative IT solutions that remain accessible to businesses of all sizes, ensuring that technology is never a barrier to success.</li>
              <li> Client-Centric Approach: Understanding our clients&apos; business needs is at the heart of everything we do. We are dedicated to providing personalized solutions that align perfectly with their goals and objectives.</li>
              <li> Excellence Through Best Practices: Our commitment to excellence is unwavering. By employing industry-leading best practices and proven methodologies, we ensure the highest quality in our services and solutions.</li>
              <li> Continuous Improvement: We believe in continual staff development to enhance our core competencies and stay at the forefront of technological advancements. This commitment to growth allows us to better serve our clients and adapt to ever-evolving market demands.</li>

            </ul>
          </p>
        </Box>
      </Box>
    </Container>
  );
}

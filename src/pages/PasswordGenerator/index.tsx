import {
  Container,
  DivText,
  DivGenerator,
  Generator,
  DivPassword,
  DivCharacter,
  Button,
} from "./styles";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Slider, IconButton } from "@mui/material";

export default function PasswordGenerator() {
  const marks = [
    {
      value: 1,
      label: "1",
    },

    {
      value: 50,
      label: "100",
    },
  ];

  const passwordPower = [
    {
      value: "red",
      label: "MUITO FRACA",
    },

    {
      value: "red",
      label: "FRACA",
    },

    {
      value: "yellow",
      label: "BOA",
    },

    {
      value: "green",
      label: "FORTE",
    },

    {
      value: "darkblue",
      label: "MUITO FORTE",
    },
  ];

  return (
    <>
      <Container>
        <DivText>
          <p>GERADOR DE SENHAS</p>
          <h1>Senhas fortes em um clique</h1>
        </DivText>

        <DivGenerator>
          <Generator>
            <DivPassword>
              <p>v4uil5g5h4</p>

              <div className="div-copy">
                <p className="password-power">MUITO FRACA</p>
                <IconButton aria-label="copy">
                  <ContentCopyIcon style={{ color: "#242424" }} />
                </IconButton>
              </div>
            </DivPassword>

            <Button>Gerar senha</Button>

            <Slider
              aria-label="Custom marks"
              defaultValue={10}
              // getAriaValueText={valuetext}
              step={10}
              valueLabelDisplay="auto"
              marks={marks}
              style={{
                width: "80%",
                marginTop: "2rem",
                marginBottom: "2rem",
                color: "#584AD3",
              }}
            />

            <DivCharacter>
              <p>Caracteres</p>
              <FormGroup
                sx={{
                  position: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#242424",
                }}
              >
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="ABC"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="abc"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="123"
                />
                <FormControlLabel control={<Checkbox />} label="#$&" />
              </FormGroup>
            </DivCharacter>
          </Generator>
        </DivGenerator>
      </Container>
    </>
  );
}

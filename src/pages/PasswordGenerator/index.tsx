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

  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numbers = '0123456789';
  let symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

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
{/* 
             <input
          type="number"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        /> */}

            <DivCharacter>
              <p>Caracteres:</p>
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
                  control={
                    <Checkbox style={{ color: "#584AD3" }} defaultChecked />
                  }
                  label="ABC"
                />
                <FormControlLabel
                  control={
                    <Checkbox style={{ color: "#584AD3" }} defaultChecked />
                  }
                  label="abc"
                />
                <FormControlLabel
                  control={
                    <Checkbox style={{ color: "#584AD3" }} defaultChecked />
                  }
                  label="123"
                />
                <FormControlLabel
                  control={<Checkbox style={{ color: "#584AD3" }} />}
                  label="#$&"
                />
              </FormGroup>
            </DivCharacter>
          </Generator>
        </DivGenerator>
      </Container>
    </>
  );
}

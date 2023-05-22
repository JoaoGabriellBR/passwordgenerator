import { useEffect, useState } from "react";
import {
  Container,
  DivText,
  DivGenerator,
  Generator,
  DivPassword,
  DivCharacter,
  DivSlider,
  Button,
} from "./styles";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Slider, IconButton } from "@mui/material";

export default function PasswordGenerator() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  const [valueLength, setValueLength] = useState<number>(10);
  const [password, setPassword] = useState<string>("");

  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  const [isCopied, setIsCopied] = useState(false);

  const generatePassword = () => {
    let availableChars = "";
    if (includeUppercase) availableChars += chars.toUpperCase();
    if (includeLowercase) availableChars += chars.toLowerCase();
    if (includeNumbers) availableChars += numbers;
    if (includeSymbols) availableChars += symbols;

    let generatedPassword = "";
    for (let i = 0; i < valueLength; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      generatedPassword += availableChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const passwordStrengths = [
    {
      label: "MUITO FRACA",
      minLength: 0,
      maxLength: 5,
      backgroundColor: "#ff0000",
    },
    { label: "FRACA", minLength: 5, maxLength: 8, backgroundColor: "#ff0000" },
    { label: "BOA", minLength: 8, maxLength: 10, backgroundColor: "#FF9900" },
    {
      label: "FORTE",
      minLength: 10,
      maxLength: 12,
      backgroundColor: "#43ed9c",
    },
    {
      label: "MUITO FORTE",
      minLength: 12,
      maxLength: Infinity,
      backgroundColor: "#0070f6",
    },
  ];

  const handleIncludeUppercase = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIncludeUppercase(event.target.checked);
  };

  const handleIncludeLowercase = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIncludeLowercase(event.target.checked);
  };

  const handleIncludeNumbers = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncludeNumbers(event.target.checked);
  };

  const handleIncludeSymbols = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncludeSymbols(event.target.checked);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setIsCopied(true);
  };

  useEffect(() => {
    generatePassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    isCopied === true && setTimeout(() => setIsCopied(false), 2000);
  }, [isCopied]);

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
              <p>
                {password.length >= 15
                  ? password.slice(0, 15) + "..."
                  : password}
              </p>
              <div className="div-copy">
                {passwordStrengths.map(
                  (strength) =>
                    valueLength >= strength.minLength &&
                    valueLength < strength.maxLength && (
                      <p
                        className="password-power"
                        style={{
                          backgroundColor: strength.backgroundColor,
                          color: "#fff",
                          padding: "0.3rem 1rem",
                          borderRadius: "2rem",
                        }}
                      >
                        {strength.label}
                      </p>
                    )
                )}

                <IconButton aria-label="copy" onClick={handleCopyToClipboard}>
                  {isCopied ? (
                    <DoneIcon />
                  ) : (
                    <ContentCopyIcon style={{ color: "#242424" }} />
                  )}
                </IconButton>
              </div>
            </DivPassword>

            <Button onClick={generatePassword}>Gerar senha</Button>

            <DivSlider>
              <p>Tamanho da senha: {valueLength}</p>
              <Slider
                aria-label="Custom marks"
                defaultValue={valueLength}
                onChange={(event) => {
                  const newValue = Number(
                    (event.target as HTMLInputElement).value
                  );
                  setValueLength(newValue);
                }}
                step={1}
                min={1}
                max={50}
                valueLabelDisplay="auto"
                style={{
                  width: "60%",
                  marginTop: "2rem",
                  marginBottom: "2rem",
                  color: "#584AD3",
                }}
              />
            </DivSlider>
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
                    <Checkbox
                      style={{ color: "#584AD3" }}
                      defaultChecked={includeLowercase}
                      onChange={handleIncludeLowercase}
                      disabled
                    />
                  }
                  label="abc"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ color: "#584AD3" }}
                      defaultChecked={includeUppercase}
                      onChange={handleIncludeUppercase}
                    />
                  }
                  label="ABC"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ color: "#584AD3" }}
                      defaultChecked={includeNumbers}
                      onChange={handleIncludeNumbers}
                    />
                  }
                  label="123"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ color: "#584AD3" }}
                      defaultChecked={includeSymbols}
                      onChange={handleIncludeSymbols}
                    />
                  }
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

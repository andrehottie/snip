import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { TSnippetCreateRequest } from "../../../redux-modules/declarations/actions/snippets";
import { Select, MenuItem, Grid, TextField } from "@mui/material";
const options = [
  "abap",
  "apex",
  "azcli",
  "bat",
  "bicep",
  "cameligo",
  "clojure",
  "coffee",
  "cpp",
  "csharp",
  "csp",
  "css",
  "cypher",
  "dart",
  "dockerfile",
  "ecl",
  "elixir",
  "flow9",
  "fsharp",
  "freemarker2",
  "go",
  "graphql",
  "handlebars",
  "hcl",
  "html",
  "ini",
  "java",
  "javascript",
  "julia",
  "kotlin",
  "less",
  "lexon",
  "lua",
  "liquid",
  "m3",
  "markdown",
  "mdx",
  "mips",
  "msdax",
  "mysql",
  "objective-c",
  "pascal",
  "pascaligo",
  "perl",
  "pgsql",
  "php",
  "pla",
  "postiats",
  "powerquery",
  "powershell",
  "protobuf",
  "pug",
  "python",
  "qsharp",
  "r",
  "razor",
  "redis",
  "redshift",
  "restructuredtext",
  "ruby",
  "rust",
  "sb",
  "scala",
  "scheme",
  "scss",
  "shell",
  "solidity",
  "sophia",
  "sparql",
  "sql",
  "st",
  "swift",
  "systemverilog",
  "tcl",
  "twig",
  "typescript",
  "vb",
  "wgsl",
  "xml",
  "yaml"
];

const commonOptions = [
  "bat",
  "clojure",
  "coffee",
  "cpp",
  "csharp",
  "csp",
  "css",
  "cypher",
  "dart",
  "dockerfile",
  "ecl",
  "elixir",
  "fsharp",
  "go",
  "graphql",
  "handlebars",
  "hcl",
  "html",
  "ini",
  "java",
  "javascript",
  "kotlin",
  "less",
  "lua",
  "markdown",
  "mysql",
  "objective-c",
  "pascal",
  "perl",
  "pgsql",
  "php",
  "pla",
  "powerquery",
  "powershell",
  "python",
  "qsharp",
  "r",
  "razor",
  "redis",
  "redshift",
  "ruby",
  "rust",
  "sb",
  "scala",
  "scheme",
  "scss",
  "shell",
  "sql",
  "swift",
  "systemverilog",
  "tcl",
  "twig",
  "typescript",
  "vb",
  "wgsl",
  "xml",
  "yaml"
];
export interface CreateSnippetModalProps {
  id: string /*
  keepMounted: boolean;
  value: string;*/;
  open: boolean;
  onClose: () => void;
  onConfirm: (s: TSnippetCreateRequest) => void;
}

export const CreateSnippetModal = (
  props: CreateSnippetModalProps
): JSX.Element => {
  const { onClose, onConfirm, open, ...other } = props;
  const [creatingSnippet, setCreatingSnippet] =
    React.useState<TSnippetCreateRequest>({
      language: "typescript",
      title: "",
      content: "",
      created_by: "",
      updated_by: ""
    });

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onConfirm(creatingSnippet);
  };

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreatingSnippet({
      ...creatingSnippet,
      language: (event.target as HTMLInputElement).value
    });
  };
  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreatingSnippet({
      ...creatingSnippet,
      title: (event.target as HTMLInputElement).value
    });
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      {...other}
    >
      <DialogTitle>Nuovo Snippet</DialogTitle>
      <DialogContent dividers>
        <Grid container direction={"column"}>
          <Grid item>
            <TextField
              required
              id="title"
              label="Titolo"
              defaultValue={creatingSnippet.title}
              value={creatingSnippet.title}
              onChange={handleChangeTitle}
            />
          </Grid>
          <Grid item>
            <Select
              fullWidth
              defaultValue={"typescript"}
              id="language-select"
              name="language-select"
              //@ts-ignore
              onSelect={handleChangeLanguage}
            >
              {commonOptions.map(option => (
                <MenuItem value={option} key={option}>
                  {option.charAt(0).toLocaleUpperCase() + option.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Annulla
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

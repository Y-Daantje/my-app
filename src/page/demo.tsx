// import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
// import { MOCK_ACTIONS } from '../components/list';
import MOCK_ACTIONSTable from "../components/table";

export interface IAction {
  id: string;
  revisionId?: string;
  actionCategoryId: string;
  isEnabled: boolean;
  isPublic: boolean;
  createdAtUtc: string;   // DateTimeOffset als ISO string
  updatedAtUtc: string;
  expiresAtUtc: string;
  name: string;
  description: string;
  kind: string;
  systemInstruction: string;
  userTemplate: string;
  tags: string[];
  preferredModel?: string;
  temperature: number;
  maxTokens: number;
  requiresCitations: boolean;
  requiresJsonOutput: boolean;
  outputFormat?: string;
}

// export enum TaskKind {
//   Summarize = "Summarize",
//   Rewrite = "Rewrite",
//   Translate = "Translate",
//   LegalRisk = "LegalRisk",
//   SalesPitch = "SalesPitch",
//   SupportReply = "SupportReply",
//   BugTriage = "BugTriage",
//   CodeReview = "CodeReview",
//   LongDocQA = "LongDocQA",
//   ToolJSON = "ToolJSON"
// }

export interface IActionCategory {
  id: string;
  name: string;
}

export default function Demo() {


  return (
   <MOCK_ACTIONSTable/>
  );
}
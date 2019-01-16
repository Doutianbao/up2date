var data={"title":"Calculator: Rheumatoid arthritis Disease Activity Score with C-reactive protein (DAS28-CRP) in adults","body":"<div id=\"topicContentCalculator\" class=\"utdArticleSection\"><div id=\"topicText\">\n<div id=\"mc3k\">\n\n\n\n\n<form name=\"RheumatoidArthritisDAS28_CRP_form\" id=\"RheumatoidArthritisDAS28_CRP_form\" action=\"\" onsubmit=\"return false;\" onkeydown=\"formKeyDown(event);\" onkeypress=\"return validNumberField(event);\" onkeyup=\"RheumatoidArthritisDAS28_CRP_fx();\" onreset=\"rrclr();\">\n\n<table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">\n<span class=\"medCalcFontTitleBox\">\n\n \nCalculator: Rheumatoid arthritis Disease Activity Score with C-reactive protein (DAS28-CRP) in adults\n</span></td></tr></table><br />&nbsp;<br />\n\n<center>\n<div id=\"calc_equation\">\n<table cellspacing=\"0\" cellpadding=\"10\" summary=\"EBMcalc Table\"><tr><td align=\"left\" bgcolor=\"#6c9a9c\"><span class=\"medCalcFontFormuli\">DAS28-CRP = 0.96 + (0.56 * sqr(TJC)) + (0.28 * sqr(SJC)) + (0.36 * ln(CRP + 1)) + (0.014 * GH)</span></td></tr></table><br />&nbsp;<br />\n</div>\n</center>\n\n<div id=\"calc_main\">\n<center><table cellpadding=\"6\" cellspacing=\"0\" width=\"95%\" summary=\"EBMcalc Table\"><tr><td align=\"right\" width=\"50%\">\n<center>\n<span class=\"medCalcFontIO\">\nInput:\n</span>\n<br />&nbsp;<br />\n<table cellpadding=\"3\" cellspacing=\"0\" summary=\"EBMcalc Table\">\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">CRP</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"CRP_param\" size=\"6\" value=\"\" onblur=\"RheumatoidArthritisDAS28_CRP_fx(); minMaxCheck();\" onchange=\"RheumatoidArthritisDAS28_CRP_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"CRP_unit\" onchange=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|mg/L\" selected=\"selected\">mg/L</option>\n<option value=\"10|0|mg/dL\">mg/dL</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">GH</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"GH_param\" size=\"6\" value=\"\" onblur=\"RheumatoidArthritisDAS28_CRP_fx(); minMaxCheck();\" onchange=\"RheumatoidArthritisDAS28_CRP_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"GH_unit\" onchange=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|#\" selected=\"selected\">#</option>\n<option value=\"1|0|number\">number</option>\n</select> </td></tr>\n\n\n</table>\n</center>\n</td><td align=\"left\" bgcolor=\"#eeeeee\">\n<center><span class=\"medCalcFontIO\">Result:</span>\n\n<br />&nbsp;<br />\n<table bgcolor=\"#eeeeee\" summary=\"EBMcalc Table\" cellspacing=\"4\">\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">DAS28-CRP</span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"DAS28_CRP_param\" size=\"6\" onfocus=\"blur();\" /></td>\n<td valign=\"top\" align=\"left\"><span class=\"medCalcFontOne\">\n<span style=\"white-space: nowrap;\"><span class=\"medCalcFontOneBold\">score</span>\n</span>\n</span></td>\n</tr>\n\n\n<tr><td colspan=\"3\">&nbsp;<br /></td></tr>\n<tr><td colspan=\"3\" align=\"center\"><span class=\"medCalcFontOneBold\">Decimal precision &nbsp;</span>\n<select name=\"decpts\" onchange=\"RheumatoidArthritisDAS28_CRP_fx();\" class=\"medCalcFontSelect\">\n<option>0</option>\n<option selected=\"selected\">1</option>\n<option>2</option>\n<option>3</option>\n\n</select></td></tr>\n\n</table>\n</center><br />&nbsp;<br />\n<div id=\"calc_buttons\">\n<center>\n<span class=\"medCalcFontOne\">\n\n\n\n\n\n<input type=\"reset\" name=\"reset\" value=\"Reset form\" />\n\n</span>\n</center>\n</div>\n</td></tr></table>\n</center>\n<br />&nbsp;<br /><center><table width=\"80%\" border=\"0\" cellspacing=\"0\" cellpadding=\"5\" summary=\"EBMcalc Table\"><tr><td align=\"center\" valign=\"top\">\n\n<table border=\"1\" cellpadding=\"10\" class=\"medCalcFontOneBold\" summary=\"EBMcalc Table\">\n<tr><td colspan=\"2\" align=\"center\"><b>Tender joint count (TJC)</b></td></tr>\n<tr><td align=\"left\" valign=\"top\">\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"medCalcFontOneBold\" summary=\"EBMcalc Table\">\n<tr><td bgcolor=\"#ffffff\" height=\"20\"><br /></td><td colspan=\"8\" bgcolor=\"#cccccc\" align=\"left\" valign=\"middle\">&nbsp;<input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" />&nbsp;Shoulder</td></tr>\n<tr><td colspan=\"9\" height=\"5\" bgcolor=\"#ffffff\"></td></tr>\n<tr><td bgcolor=\"#ffffff\" height=\"20\"><br /></td><td colspan=\"8\" bgcolor=\"#cccccc\" align=\"left\" valign=\"middle\">&nbsp;<input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" />&nbsp;Elbow</td></tr>\n<tr><td colspan=\"9\" height=\"5\" bgcolor=\"#ffffff\"></td></tr>\n<tr><td bgcolor=\"#ffffff\" height=\"20\"><br /></td><td colspan=\"8\" bgcolor=\"#cccccc\" align=\"left\" valign=\"middle\">&nbsp;<input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" />&nbsp;Wrist</td></tr>\n<tr><td colspan=\"9\" bgcolor=\"#ffffff\" height=\"10\"></td></tr>\n\n<tr>\n\n<td bgcolor=\"#ffffff\" height=\"20\" width=\"20\" valign=\"top\" class=\"medCalcFingerTipLeft\"><br /></td>\n\n<td colspan=\"8\" bgcolor=\"#cccccc\" align=\"center\" valign=\"bottom\">Right hand</td>\n</tr>\n\n<tr>\n<td bgcolor=\"#cccccc\" width=\"20\" height=\"20\" align=\"center\">&nbsp;</td>\n<td colspan=\"8\" bgcolor=\"#cccccc\" align=\"center\"><span class=\"medCalcFontTwo\">MCP 1-5<br />IP 1, PIP 2-5</span></td>\n</tr>\n\n<tr>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#cccccc\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#cccccc\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#cccccc\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n</tr>\n\n<tr>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\"></td>\n<td bgcolor=\"#cccccc\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\"><br /></td>\n<td bgcolor=\"#cccccc\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\"><br /></td>\n<td bgcolor=\"#cccccc\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\"><br /></td>\n<td bgcolor=\"#cccccc\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n</tr>\n\n<tr>\n<td bgcolor=\"#ffffff\" height=\"20\" valign=\"top\" class=\"medCalcFingerTip1\"><br /></td>\n<td bgcolor=\"#ffffff\" width=\"3\">&nbsp;</td>\n<td bgcolor=\"#cccccc\" height=\"20\">&nbsp;</td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" height=\"20\">&nbsp;</td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" height=\"20\">&nbsp;</td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" height=\"20\">&nbsp;</td>\n</tr>\n\n<tr>\n<td colspan=\"2\" bgcolor=\"#ffffff\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\" valign=\"top\" class=\"medCalcFingerTip2\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\" class=\"medCalcFingerTip3\"></td>\n<td bgcolor=\"#ffffff\" height=\"30\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\" valign=\"top\" class=\"medCalcFingerTip2\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\" valign=\"top\" class=\"medCalcFingerTip1\"><br /></td>\n</tr>\n\n<tr><td colspan=\"9\"><br /></td></tr>\n<tr><td height=\"20\"><br /></td><td colspan=\"8\" bgcolor=\"#cccccc\" align=\"left\" valign=\"middle\">&nbsp;<input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" />&nbsp;Knee</td></tr>\n\n</table></td>\n\n\n<td align=\"left\" valign=\"top\">\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"medCalcFontOneBold\" summary=\"EBMcalc Table\">\n<tr><td colspan=\"8\" bgcolor=\"#cccccc\" height=\"20\" align=\"right\" valign=\"middle\">Shoulder&nbsp;<input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" />&nbsp;</td><td><br /></td></tr>\n<tr><td colspan=\"9\" height=\"5\"></td></tr>\n<tr><td colspan=\"8\" bgcolor=\"#cccccc\" height=\"20\" align=\"right\" valign=\"middle\">Elbow&nbsp;<input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" />&nbsp;</td><td><br /></td></tr>\n<tr><td colspan=\"9\" height=\"5\"></td></tr>\n<tr><td colspan=\"8\" bgcolor=\"#cccccc\" height=\"20\" align=\"right\" valign=\"middle\">Wrist&nbsp;<input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" />&nbsp;</td><td><br /></td></tr>\n<tr><td colspan=\"9\" height=\"10\"></td></tr>\n\n<tr>\n<td colspan=\"8\" bgcolor=\"#cccccc\" align=\"center\" valign=\"bottom\">Left hand</td>\n<td bgcolor=\"#ffffff\" height=\"20\" width=\"20\" valign=\"top\" class=\"medCalcFingerTipRight\"><br /></td>\n</tr>\n\n<tr>\n<td colspan=\"8\" bgcolor=\"#cccccc\" height=\"20\" align=\"center\"><span class=\"medCalcFontTwo\">MCP 1-5<br />IP 1, PIP 2-5</span></td>\n<td bgcolor=\"#cccccc\" width=\"20\">&nbsp;</td>\n</tr>\n\n<tr>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#cccccc\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#cccccc\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#cccccc\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n</tr>\n\n<tr>\n<td bgcolor=\"#cccccc\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\"><br /></td>\n<td bgcolor=\"#cccccc\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\"><br /></td>\n<td bgcolor=\"#cccccc\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\"><br /></td>\n<td bgcolor=\"#cccccc\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n</tr>\n\n<tr>\n<td bgcolor=\"#cccccc\" height=\"20\">&nbsp;</td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" height=\"20\">&nbsp;</td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" height=\"20\">&nbsp;</td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" height=\"20\">&nbsp;</td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"20\" valign=\"top\" class=\"medCalcFingerTip1\"><br /></td>\n</tr>\n\n\n<tr>\n<td bgcolor=\"#ffffff\" height=\"30\" valign=\"top\" class=\"medCalcFingerTip1\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\" valign=\"top\" class=\"medCalcFingerTip2\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\" valign=\"top\" class=\"medCalcFingerTip3\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\" valign=\"top\" class=\"medCalcFingerTip2\"><br /></td>\n<td colspan=\"2\" bgcolor=\"#ffffff\"><br /></td>\n</tr>\n\n<tr><td colspan=\"9\"><br /></td></tr>\n\n<tr><td colspan=\"8\" bgcolor=\"#cccccc\" height=\"20\" align=\"right\" valign=\"middle\">Knee&nbsp;<input type=\"checkbox\" name=\"TJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" />&nbsp;</td><td><br /></td></tr>\n\n</table></td></tr>\n<tr><td colspan=\"2\" align=\"center\">\nTJC &nbsp; <input type=\"text\" name=\"TJC_param\" size=\"3\" onfocus=\"blur();\" />  &nbsp;&nbsp;&nbsp;\n<input type=\"button\" onclick=\"TJCAll();\" value=\"Select All\" /> &nbsp;&nbsp;&nbsp;\n<input type=\"button\" onclick=\"TJCClr();\" value=\"Clear All\" />\n</td></tr>\n</table>\n\n</td><td align=\"center\" valign=\"top\">\n<table border=\"1\" cellpadding=\"10\" class=\"medCalcFontOneBold\" summary=\"EBMcalc Table\">\n<tr><td colspan=\"2\" align=\"center\"><b>Swollen joint count (SJC)</b></td></tr>\n<tr><td align=\"left\" valign=\"top\">\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"medCalcFontOneBold\" summary=\"EBMcalc Table\">\n<tr><td bgcolor=\"#ffffff\" height=\"20\"><br /></td><td colspan=\"8\" bgcolor=\"#cccccc\" align=\"left\" valign=\"middle\">&nbsp;<input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" />&nbsp;Shoulder</td></tr>\n<tr><td colspan=\"9\" height=\"5\" bgcolor=\"#ffffff\"></td></tr>\n<tr><td bgcolor=\"#ffffff\" height=\"20\"><br /></td><td colspan=\"8\" bgcolor=\"#cccccc\" align=\"left\" valign=\"middle\">&nbsp;<input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" />&nbsp;Elbow</td></tr>\n<tr><td colspan=\"9\" height=\"5\" bgcolor=\"#ffffff\"></td></tr>\n<tr><td bgcolor=\"#ffffff\" height=\"20\"><br /></td><td colspan=\"8\" bgcolor=\"#cccccc\" align=\"left\" valign=\"middle\">&nbsp;<input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" />&nbsp;Wrist</td></tr>\n<tr><td colspan=\"9\" bgcolor=\"#ffffff\" height=\"10\"></td></tr>\n\n<tr>\n\n<td bgcolor=\"#ffffff\" height=\"20\" width=\"20\" valign=\"top\" class=\"medCalcFingerTipLeft\"><br /></td>\n\n<td colspan=\"8\" bgcolor=\"#cccccc\" align=\"center\" valign=\"bottom\">Right hand</td>\n</tr>\n\n<tr>\n<td bgcolor=\"#cccccc\" width=\"20\" height=\"20\" align=\"center\">&nbsp;</td>\n<td colspan=\"8\" bgcolor=\"#cccccc\" align=\"center\"><span class=\"medCalcFontTwo\">MCP 1-5<br />IP 1, PIP 2-5</span></td>\n</tr>\n\n<tr>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#cccccc\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#cccccc\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#cccccc\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n</tr>\n\n<tr>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\"></td>\n<td bgcolor=\"#cccccc\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\"><br /></td>\n<td bgcolor=\"#cccccc\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\"><br /></td>\n<td bgcolor=\"#cccccc\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\"><br /></td>\n<td bgcolor=\"#cccccc\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n</tr>\n\n<tr>\n<td bgcolor=\"#ffffff\" height=\"20\" valign=\"top\" class=\"medCalcFingerTip1\"><br /></td>\n<td bgcolor=\"#ffffff\" width=\"3\">&nbsp;</td>\n<td bgcolor=\"#cccccc\" height=\"20\">&nbsp;</td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" height=\"20\">&nbsp;</td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" height=\"20\">&nbsp;</td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" height=\"20\">&nbsp;</td>\n</tr>\n\n<tr>\n<td colspan=\"2\" bgcolor=\"#ffffff\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\" valign=\"top\" class=\"medCalcFingerTip2\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\" class=\"medCalcFingerTip3\"></td>\n<td bgcolor=\"#ffffff\" height=\"30\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\" valign=\"top\" class=\"medCalcFingerTip2\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\" valign=\"top\" class=\"medCalcFingerTip1\"><br /></td>\n</tr>\n\n<tr><td colspan=\"9\"><br /></td></tr>\n<tr><td height=\"20\"><br /></td><td colspan=\"8\" bgcolor=\"#cccccc\" align=\"left\" valign=\"middle\">&nbsp;<input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" />&nbsp;Knee</td></tr>\n\n</table></td>\n\n\n<td align=\"left\" valign=\"top\">\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"medCalcFontOneBold\" summary=\"EBMcalc Table\">\n<tr><td colspan=\"8\" bgcolor=\"#cccccc\" height=\"20\" align=\"right\" valign=\"middle\">Shoulder&nbsp;<input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" />&nbsp;</td><td><br /></td></tr>\n<tr><td colspan=\"9\" height=\"5\"></td></tr>\n<tr><td colspan=\"8\" bgcolor=\"#cccccc\" height=\"20\" align=\"right\" valign=\"middle\">Elbow&nbsp;<input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" />&nbsp;</td><td><br /></td></tr>\n<tr><td colspan=\"9\" height=\"5\"></td></tr>\n<tr><td colspan=\"8\" bgcolor=\"#cccccc\" height=\"20\" align=\"right\" valign=\"middle\">Wrist&nbsp;<input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" />&nbsp;</td><td><br /></td></tr>\n<tr><td colspan=\"9\" height=\"10\"></td></tr>\n\n<tr>\n<td colspan=\"8\" bgcolor=\"#cccccc\" align=\"center\" valign=\"bottom\">Left hand</td>\n<td bgcolor=\"#ffffff\" height=\"20\" width=\"20\" valign=\"top\" class=\"medCalcFingerTipRight\"><br /></td>\n</tr>\n\n<tr>\n<td colspan=\"8\" bgcolor=\"#cccccc\" height=\"20\" align=\"center\"><span class=\"medCalcFontTwo\">MCP 1-5<br />IP 1, PIP 2-5</span></td>\n<td bgcolor=\"#cccccc\" width=\"20\">&nbsp;</td>\n</tr>\n\n<tr>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#cccccc\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#cccccc\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#cccccc\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n</tr>\n\n<tr>\n<td bgcolor=\"#cccccc\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\"><br /></td>\n<td bgcolor=\"#cccccc\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\"><br /></td>\n<td bgcolor=\"#cccccc\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\"><br /></td>\n<td bgcolor=\"#cccccc\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n<td bgcolor=\"#ffffff\"><br /></td>\n<td bgcolor=\"#cccccc\" width=\"20\" align=\"center\"><input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" /></td>\n</tr>\n\n<tr>\n<td bgcolor=\"#cccccc\" height=\"20\">&nbsp;</td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" height=\"20\">&nbsp;</td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" height=\"20\">&nbsp;</td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#cccccc\" height=\"20\">&nbsp;</td>\n<td bgcolor=\"#ffffff\" width=\"3\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"20\" valign=\"top\" class=\"medCalcFingerTip1\"><br /></td>\n</tr>\n\n\n<tr>\n<td bgcolor=\"#ffffff\" height=\"30\" valign=\"top\" class=\"medCalcFingerTip1\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\" valign=\"top\" class=\"medCalcFingerTip2\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\" valign=\"top\" class=\"medCalcFingerTip3\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\"><br /></td>\n<td bgcolor=\"#ffffff\" height=\"30\" valign=\"top\" class=\"medCalcFingerTip2\"><br /></td>\n<td colspan=\"2\" bgcolor=\"#ffffff\"><br /></td>\n</tr>\n\n<tr><td colspan=\"9\"><br /></td></tr>\n\n<tr><td colspan=\"8\" bgcolor=\"#cccccc\" height=\"20\" align=\"right\" valign=\"middle\">Knee&nbsp;<input type=\"checkbox\" name=\"SJC_box\" onclick=\"RheumatoidArthritisDAS28_CRP_fx();\" style=\"height: 12px; width: 12px;\" />&nbsp;</td><td><br /></td></tr>\n\n</table></td></tr>\n<tr><td colspan=\"2\" align=\"center\">\nSJC &nbsp; <input type=\"text\" name=\"SJC_param\" size=\"3\" onfocus=\"blur();\" />  &nbsp;&nbsp;&nbsp;\n<input type=\"button\" onclick=\"SJCAll();\" value=\"Select All\" /> &nbsp;&nbsp;&nbsp;\n<input type=\"button\" onclick=\"SJCClr();\" value=\"Clear All\" />\n</td></tr>\n</table>\n</td>\n</tr></table></center>\n\n<br />&nbsp;<br />\n<table width=\"70%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">    \n<span class=\"medCalcFontTitleBox\">\n\n DAS28-CRP Interpretation\n</span></td></tr></table><br />&nbsp;<br />\n<center>\n<table border=\"1\" cellpadding=\"4\" cellspacing=\"0\" summary=\"RRTable\">\n<tr id=\"rr1_1\"><td align=\"right\" style=\"border-right: 0px;\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">DAS28-CRP &lt;2.6:</span></td>\n<td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">Remission</span></td></tr>\n<tr id=\"rr1_2\"><td align=\"right\" style=\"border-right: 0px;\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">DAS28-CRP &ge;2.6 and &le;3.2:</span></td>\n<td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">Low disease activity</span></td></tr>\n<tr id=\"rr1_3\"><td align=\"right\" style=\"border-right: 0px;\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">DAS28-CRP &gt;3.2 and &le;5.1:</span></td>\n<td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">Moderate disease activity</span></td></tr>\n<tr id=\"rr1_4\"><td align=\"right\" style=\"border-right: 0px;\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">DAS28-CRP &gt;5.1:</span></td>\n<td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">High disease activity</span></td></tr>\n\n</table>\n</center>\n<br />&nbsp;<br />\n\n\n</div><div id=\"pretextrefs\">\n&nbsp;\n</div>\n\n<div id=\"calc_notes\">\n<span class=\"medCalcFontOneBold\">Notes</span>\n<ul class=\"medCalcFontOne\">\n<li>In the hands, the joints that are evaluated include the first through fifth metacarpophalangeal joint, the interphalangeal joint of the thumb, and the second through fifth proximal interphalangeal joint.</li>\n<li>In addition to assessment of the joints of the hands, the following are also assessed: wrists, elbows, shoulders, and knees.</li>\n<li>The <b>GH</b> or Global Health parameter represents the patient's self assessment of disease activity on a 0-100 scale where 100 means maximal disease activity.</li>\n<li>A <b>DAS28-CRP</b> reduction by 0.6 represents a moderate improvement.  A reduction more than 1.2 represents a major improvement.</li>\n<li><b>CRP</b>: C-reactive protein; <b>IP</b>: interphalangeal joint; <b>MCP</b>: metacarpophalangeal joint; <b>PIP</b>: proximal interphalangeal joint.</li>\n<li>Classification of disease activity using the DAS28-CRP may differ from that using DAS28 and erythrocyte sedimentation rate (ESR).</li>\n\n</ul>\n</div>\n\n\n<div id=\"calc_tables\">\n\n</div>\n\n<br />&nbsp;<br />\n\n<div id=\"calc_refs\">\n<span class=\"medCalcFontRef\"><b>References</b></span>\n<ol>\n<li><span class=\"medCalcFontRef\">Anderson J, Caplan L, Yazdany J, et. al. Rheumatoid arthritis disease activity measures: American  College of Rheumatology recommendations for use in clinical practice. <i>Arthritis Care Res (Hoboken)</i>. 2012 May;64(5):640-7.</span></li>\n<li><span class=\"medCalcFontRef\">Aletaha D, Ward MM, Machold KP, et. al. Remission and active disease in rheumatoid arthritis:  defining criteria for disease activity states. <i>Arthritis Rheum</i>. 2005 Sep;52(9):2625-36.</span></li>\n<li><span class=\"medCalcFontRef\">Hensor EM, Emery P, Bingham SJ, et. al. Discrepancies in categorizing rheumatoid arthritis patients by DAS-28(ESR) and DAS-28(CRP):  can they be reduced?. <i>Rheumatology (Oxford)</i>. 2010 Aug;49(8):1521-9.</span></li>\n\n</ol>\n</div>\n\n</form>\n\n</div>\n</div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"printDisclaimer\">\r\n\t<b>Only digits 0 to 9 and a single decimal point (&quot;.&quot;) are acceptable as numeric inputs. Attempted input of other characters into a numeric field may lead to an incorrect result.</b>\r\n\t<p>\r\n\tInformation on this page may not appear correctly if printed. </p>\r\n</div>\r\n<div id=\"disclaimerCalculator\">\r\n\t<div class=\"medCalcFontTwo\">\r\n\t\t<p class=\"header\">Legal Notices and Disclaimer</p>\r\n\t\t<p>\r\n\t\t\tAll information contained in and produced by the EBMcalc system is provided\r\n\t\t\tfor educational purposes only. This information should not be used for the diagnosis or treatment\r\n\t\t\tof any health problem or disease. \r\n\t\t\t<b>THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.</b>\r\n\t\t\t<a href=\"https://www.uptodate.com/legal/ebmcalc-disclaimer\" class=\"medCalcDisclaimerLink\">Click here for full notice and disclaimer.</a>\r\n\t\t</p>\r\n\t\t<p class=\"copy\">EBMcalc is Copyright &copy; 1998-2018 Foundation Internet Services, LLC</p>\r\n\t</div>\r\n</div><div id=\"topicVersionRevision\">Topic 111115 Version 2.0</div></div>","outline":null,"javascript":"\n/* <![CDATA[ */\n\nvar lastChar = '';\n\nfunction log(i){\nreturn Math.log(i) * Math.LOG10E;   \n}\n\nfunction ln(i){\nreturn Math.log(i);\n}\n\nfunction sq(i){\nreturn i * i;\n}\n\nfunction sqr(i){\nreturn Math.sqrt(i);\n}\n\n\nfunction power(x,y){\nreturn Math.pow(x,y);\n}\n\nfunction eTo(x){\nreturn Math.exp(x);\n}\n\n\nfunction fixDP(r, dps) {\nif (isNaN(r)) return \"NaN\";\nvar msign = '';\nif (r < 0) msign = '-';\nx = Math.abs(r);\nif (x > Math.pow(10, 21)) return msign + x.toString();\nvar m = Math.round(x * Math.pow(10, dps)).toString();\nif (dps == 0) return msign + m;\nwhile (m.length <= dps) m = \"0\" + m;\nreturn msign + m.substring(0, m.length - dps) + \".\" + m.substring(m.length - dps);\n}\n\nfunction alertNaN(){\nalert('This field is improperly formatted. You may only input the digits 0-9 and a decimal point.');  \ndoCalc = false; \nclrResults();\n}\n\nfunction validNumberField(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\nvar val = field.value;\nvar charCode = event.charCode;\nvar key = String.fromCharCode(charCode);\n\nif(charCode == 0 || charCode == 13) {\n  return true;\n}\n\nif(key == ' ') {\nalert('Numeric field cannot contain spaces.');\n  return false;\n}\t\n\t\t\nif(key == '.') { return validDecimalPoint(val, key); }\nif(key == '-') { return validMinus(val, key); }\n\nif(isNaN(parseInt(key))) {\nalertNaN();\nreturn false;\n}\n\t\nreturn validFloat(val, key);\n}\nreturn true;\n}\n\nfunction validDecimalPoint(val, key) {\nif(val.length == 0 && lastChar != '.') {\n  lastChar = '.';\n  return true;\n}\nif(val.indexOf('.') >= 0 || lastChar == '.') {\n alertNaN();\n return false;\n}\nif(validFloat(val, key)) {\n lastChar = key;\n return true;\n}\nlastChar = '';\nreturn false;\n}\n\nfunction validMinus(val, key) {\nif(val.length == 0) {\n  return true;\n}\nif(val.length > 1) {\n alertNaN();\n return false;\n}\nreturn validFloat(val, key);\n}\n\n\nfunction validFloat(val, key) {\nvar currentVal = parseFloat(val + key);\nif(isNaN(val + key) || isNaN(currentVal)) {\nalertNaN();\nreturn false;\n}\nreturn true;\n}\n\nfunction formKeyDown(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\n  var val = field.value;\n  var keyCode = event.keyCode;\n  if(keyCode == 8 || keyCode == 127) {\n    // backspace or delete\n    if(lastChar == '.') {\n      lastChar = '';\n    }\n    if(field.value.length == 3 && field.value[0] == '0' && field.value[1] == '.') {\n      // this handles a backspace on an input like \".5\", which is saved internally as \"0.5\"\n      //   otherwise, if you leave the field after the backspace, it retains \"0.5\" as the value, most likely an iOS bug\n      field.value = ''; \n    }\n  }\n}\nclrResults();\n}\n\nfunction clrValue(field) {\n field.value = '';\n lastChar = '';\n}\n\nvar currenttimeout;\n\n\nvar calctxt = ''; \nvar xmltxt = ''; \nvar xmlresult = '';\nvar htmtxt = ''; \nvar postNow = false;\n\nfunction RheumatoidArthritisDAS28_CRP_fx() {\ncurrenttimeout = self.setTimeout('minMaxCheck();', 4500);\n\nwith(document.RheumatoidArthritisDAS28_CRP_form){\n\n\ndoCalc = true;\nparam_value = parseFloat(CRP_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = CRP_unit.options[CRP_unit.selectedIndex].value.split('|');\nCRP = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nparam_value = parseFloat(GH_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = GH_unit.options[GH_unit.selectedIndex].value.split('|');\nGH = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nvar TJC = 0;\nfor (jcount = 0; jcount < 28; jcount++){\nif(TJC_box[jcount].checked) TJC = TJC + 1;\n}\nTJC_param.value = TJC;\nvar SJC = 0;\nfor (jcount = 0; jcount < 28; jcount++){\nif(SJC_box[jcount].checked) SJC = SJC + 1;\n}\nSJC_param.value = SJC;\ndp = decpts.options[decpts.selectedIndex].text;\nDAS28_CRP =  0.96 + (0.56 * sqr(TJC)) + (0.28 * sqr(SJC)) + (0.36 * ln(CRP + 1)) + (0.014 * GH);\n\nif (doCalc) DAS28_CRP_param.value = fixDP(DAS28_CRP, dp);\n\n\n\n\nif (doCalc){\nrrclr();\nif (DAS28_CRP <2.6){ document.getElementById('rr1_1').bgColor = '#cccccc';\n}\nif ((DAS28_CRP >=2.6) && (DAS28_CRP <=3.2)){ document.getElementById('rr1_2').bgColor = '#cccccc';\n}\nif ((DAS28_CRP >3.2) && (DAS28_CRP <=5.1)){ document.getElementById('rr1_3').bgColor = '#cccccc';\n}\nif (DAS28_CRP >5.1){ document.getElementById('rr1_4').bgColor = '#cccccc';\n}\n\n\n}\n\n\n}\n\n}\n\nfunction minMaxCheck(){\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.RheumatoidArthritisDAS28_CRP_form){\n\nif (CRP_param.value && isNaN(CRP_param.value)){ clrValue(CRP_param); alertNaN('CRP'); }\nif (CRP_param.value && CRP < 0) {\nCRP = 0;\nclrValue(CRP_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for CRP is 0 mg/L.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (CRP_param.value && CRP > 150) {\nclrValue(CRP_param);\nclrResults();\nCRP = 0;\ndoCalc = false;\n alert(\"The maximum value for CRP is 150 mg/L.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (GH_param.value && isNaN(GH_param.value)){ clrValue(GH_param); alertNaN('GH'); }\nif (GH_param.value && GH < 0) {\nGH = 0;\nclrValue(GH_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for GH is 0 #.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (GH_param.value && GH > 100) {\nclrValue(GH_param);\nclrResults();\nGH = 0;\ndoCalc = false;\n alert(\"The maximum value for GH is 100 #.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\n\n\n}\n\n}\n\nfunction clrResults(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.RheumatoidArthritisDAS28_CRP_form){\n\nDAS28_CRP_param.value = '';\n\nrrclr();\n\n}\n\n}\n\nvar CRP = null,\nGH = null,\nDAS28_CRP = null,\nparam_value = null;\n\n\n\n\nfunction TJCClr() {\nwith(document.RheumatoidArthritisDAS28_CRP_form){\nTJC = 0;\nfor (jcount = 0; jcount < 28; jcount++){\nTJC_box[jcount].checked = false;\n}\nTJC_param.value = TJC;\nRheumatoidArthritisDAS28_CRP_fx();\n}}\n\n\nfunction TJCAll() {\nwith(document.RheumatoidArthritisDAS28_CRP_form){\nTJC = 28;\nfor (jcount = 0; jcount < 28; jcount++){\nTJC_box[jcount].checked = true;\n}\nTJC_param.value = TJC;\nRheumatoidArthritisDAS28_CRP_fx();\n}}\n\nfunction SJCClr() {\nwith(document.RheumatoidArthritisDAS28_CRP_form){\nSJC = 0;\nfor (jcount = 0; jcount < 28; jcount++){\nSJC_box[jcount].checked = false;\n}\nSJC_param.value = SJC;\nRheumatoidArthritisDAS28_CRP_fx();\n}}\n\n\nfunction SJCAll() {\nwith(document.RheumatoidArthritisDAS28_CRP_form){\nSJC = 28;\nfor (jcount = 0; jcount < 28; jcount++){\nSJC_box[jcount].checked = true;\n}\nSJC_param.value = SJC;\nRheumatoidArthritisDAS28_CRP_fx();\n}}\n\n\n\n\n\n\n\nfunction rrclr(){\ndocument.getElementById('rr1_1').bgColor = '';\ndocument.getElementById('rr1_2').bgColor = '';\ndocument.getElementById('rr1_3').bgColor = '';\ndocument.getElementById('rr1_4').bgColor = '';\n}\n\n\n\n\n/* ]]> */\n"}
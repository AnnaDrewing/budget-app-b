import { Button } from "@mui/material";

export default function Log({
  fontFamilyClicks,
  fontSizeClicks,
  themeClicks,
  startTime,
}) {
  var log = {
    fontFamilyClicks: fontFamilyClicks,
    fontSizeClicks: fontSizeClicks,
    themeClicks: themeClicks,
  };

  let timeSpent;
  const measureTime = () => {
    let endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;
    // get seconds
    timeSpent = Math.round(timeDiff);
    log.timeSpent = timeSpent;
  };

  const downloadLog = () => {
    measureTime();
    const fileData = JSON.stringify(log);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "log.json";
    link.href = url;
    link.click();
  };

  return <Button onClick={downloadLog}>Download Log File</Button>;
}

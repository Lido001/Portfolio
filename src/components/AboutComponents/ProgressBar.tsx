import { useEffect, useState, useRef } from "react";
import LinearProgress, { LinearProgressProps } from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface LinearProgressWithLabelProps extends LinearProgressProps {
  value: number;
  leftLabel: string;  
}




function LinearProgressWithLabel({ value, leftLabel, ...props }: LinearProgressWithLabelProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      {/* Labels Above Progress Bar */}
      <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 1 }}>
        <Typography variant="body2" sx={{ color: "#999" }}>{leftLabel}</Typography>
        <Typography variant="body2" sx={{ color: "#999", fontWeight: "bold" }}>
          {`${Math.round(value)}%`}
        </Typography>
      </Box>

      {/* Progress Bar */}
      <Box sx={{ width: "100%",  }}>
        <LinearProgress variant="determinate" value={value} {...props} sx={{
            height: 3, // Adjust height
            borderRadius: 5, // Rounded corners
            backgroundColor: "hsla(0, 0%, 100%, .08)", // Background color
            "& .MuiLinearProgress-bar": {
              backgroundColor: value >= 80 ? "green" : value >= 50 ? "orange" : "red", // Dynamic Color
            },
          }}/>
      </Box>
    </Box>
  );
}

interface LinearWithValueLabelProps {
  percentage: number;
  skill: string;
}

export default function LinearWithValueLabel({ percentage, skill }: LinearWithValueLabelProps) {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= percentage) {
          clearInterval(timer);
          return percentage;
        }
        return prev + 10;
      });
    }, 300);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <Box sx={{ width: "100%" , }} ref={progressRef}>
      <LinearProgressWithLabel sx={{ backgroundColor:"black", }} value={progress} leftLabel={skill} />
    </Box>
  );
}

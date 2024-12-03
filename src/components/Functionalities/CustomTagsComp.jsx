import React, { useState } from "react";
import {
  TextField,
  IconButton,
  InputAdornment,
  Grid,
  Typography,
  Chip,
  FormControl,
} from "@mui/material";
import toast from "react-hot-toast";
import { AiOutlineEnter } from "react-icons/ai";

export const CustomTagsComp = ({ localState, setLocalState, setUpdate }) => {
  // Function to add a tag
  const enterTag = () => {
    if (localState?.tags?.includes(localState?.temptag)) {
      toast.error("Duplicate tags cannot be added.");
    } else if (!localState?.temptag) {
      toast.error("The input provided is invalid.");
    } else {
      setUpdate(true);
      setLocalState({
        ...localState,
        tags: [...localState.tags, localState?.temptag],
        temptag: "",
      });
    }
  };

  // Function to remove a tag
  const removeTag = (tagToRemove) => {
    setUpdate(true);
    const updatedTags = localState.tags.filter((tag) => tag !== tagToRemove);
    setLocalState({
      ...localState,
      tags: updatedTags,
    });
  };

  // Key down handler
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (localState.temptag.trim()) {
        enterTag(); // Call the enter function to add the tag
      } else {
        toast.error("A tag cannot be left empty.");
      }
    } else if (e.key === " ") {
      e.preventDefault(); // Prevent adding spaces
    }
  };

  return (
    <>
      <FormControl fullWidth>
        <TextField
          sx={{ mt: 2 }}
          fullWidth
          label="Enter the tags"
          name="Tags"
          placeholder="Enter the word and add, maximum only 3 tags can be added"
          onChange={(e) =>
            setLocalState({ ...localState, temptag: e.target.value })
          }
          onKeyDown={handleKeyDown}
          value={localState?.temptag}
          disabled={localState?.tags?.length >= 3}
          inputProps={{
            maxLength: 16,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="primary"
                  onClick={() => {
                    if (localState?.temptag) {
                      enterTag();
                    } else {
                      toast.error("Please provide a tag to proceed.");
                    }
                  }}
                  disabled={localState?.tags?.length >= 3}
                >
                  <AiOutlineEnter
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      strokeWidth: "2",
                    }}
                  />
                  {/* <LogIn /> */}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Typography
          variant="caption"
          sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
          color={localState?.temptag?.length > 10 && "error"}
        >
          {`${
            localState?.temptag?.length === undefined
              ? 0
              : localState?.temptag?.length
          }/${16}`}
        </Typography>
      </FormControl>
      {localState?.tags?.length !== 0 && (
        <Grid
          sx={{
            border: (theme) => `1px solid ${theme?.palette?.divider}`,
            width: "100%",
            borderRadius: 1,
            mt: 2,
            px: 1,
            pb: 1,
          }}
        >
          <Typography variant="caption" color="grey.700">
            Tags preview
          </Typography>
          <div>
            {localState?.tags?.map((tag) => (
              <Chip
                key={tag}
                sx={{ mr: 1 }}
                label={tag}
                color="secondary"
                size="small"
                variant="outlined"
                onDelete={() => removeTag(tag)}
              />
            ))}
          </div>
        </Grid>
      )}
    </>
  );
};

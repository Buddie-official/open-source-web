# Firmware Quick Start Guide

Welcome to the Buddie AI Headset Firmware Project! This guide will help you quickly complete the process of pulling the project, configuring the environment, compiling, and flashing the firmware, so you can run the Buddie firmware on a development board based on the JieLi AC701N chip.

The main features of the Buddie firmware are as follows:
1. Microphone and speaker data collection
2. Speaker detection
3. Audio data compression (PCA, OPUS)
4. Bluetooth data transmission and reception (BLE, SPP)

With our open-source mobile AI application, you can achieve the following core functions:

- Real-time transcription of spoken content
- Voice interaction with the AI assistant via the headset
- Transcription of both your and others' speech during online meetings


## 1. Preparation

### 1. Hardware Requirements
- **Operating System:** Windows 10 or above (64-bit recommended)
- **Hardware:** 
  - JieLi AC701N development board
  - Forced download tool
- **Other:** USB **data cable** (type-A) 

### 2. Software Environment Setup
#### 2.1 Install Basic Development Tools
1. Download and install the Windows version of Code::Blocks (used to generate necessary configuration files)
    1. Open it for the first time and close it immediately to trigger configuration file generation
2. Download and install the latest JieLi Windows toolchain
3. Install VSCode (recommended development environment)
#### 2.2 Configure VSCode Extensions
After opening VSCode, search for and install the following extensions in the marketplace:
- Task Explorer: for managing build tasks
- C/C++: provides C language development support


## 2. Compilation and Flashing

1. Click **TASK EXPLORER > SDK > vscode > all** to execute the build task
2. After connecting the computer and the development board, press the button on the forced download tool, and then click **TASK EXPLORER > SDK > vscode > all** again to execute the build and flash task

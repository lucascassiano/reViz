# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.12

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/local/Cellar/cmake/3.12.2/bin/cmake

# The command to remove a file.
RM = /usr/local/Cellar/cmake/3.12.2/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/lucascassiano/Documents/GitHub/reViz3d/exp/cpp

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/lucascassiano/Documents/GitHub/reViz3d/exp/cpp

# Include any dependencies generated for this target.
include CMakeFiles/hello-vsc.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/hello-vsc.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/hello-vsc.dir/flags.make

CMakeFiles/hello-vsc.dir/main.cpp.o: CMakeFiles/hello-vsc.dir/flags.make
CMakeFiles/hello-vsc.dir/main.cpp.o: main.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/lucascassiano/Documents/GitHub/reViz3d/exp/cpp/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/hello-vsc.dir/main.cpp.o"
	/Library/Developer/CommandLineTools/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/hello-vsc.dir/main.cpp.o -c /Users/lucascassiano/Documents/GitHub/reViz3d/exp/cpp/main.cpp

CMakeFiles/hello-vsc.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/hello-vsc.dir/main.cpp.i"
	/Library/Developer/CommandLineTools/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /Users/lucascassiano/Documents/GitHub/reViz3d/exp/cpp/main.cpp > CMakeFiles/hello-vsc.dir/main.cpp.i

CMakeFiles/hello-vsc.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/hello-vsc.dir/main.cpp.s"
	/Library/Developer/CommandLineTools/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /Users/lucascassiano/Documents/GitHub/reViz3d/exp/cpp/main.cpp -o CMakeFiles/hello-vsc.dir/main.cpp.s

# Object files for target hello-vsc
hello__vsc_OBJECTS = \
"CMakeFiles/hello-vsc.dir/main.cpp.o"

# External object files for target hello-vsc
hello__vsc_EXTERNAL_OBJECTS =

hello-vsc: CMakeFiles/hello-vsc.dir/main.cpp.o
hello-vsc: CMakeFiles/hello-vsc.dir/build.make
hello-vsc: CMakeFiles/hello-vsc.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/Users/lucascassiano/Documents/GitHub/reViz3d/exp/cpp/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable hello-vsc"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/hello-vsc.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/hello-vsc.dir/build: hello-vsc

.PHONY : CMakeFiles/hello-vsc.dir/build

CMakeFiles/hello-vsc.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/hello-vsc.dir/cmake_clean.cmake
.PHONY : CMakeFiles/hello-vsc.dir/clean

CMakeFiles/hello-vsc.dir/depend:
	cd /Users/lucascassiano/Documents/GitHub/reViz3d/exp/cpp && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/lucascassiano/Documents/GitHub/reViz3d/exp/cpp /Users/lucascassiano/Documents/GitHub/reViz3d/exp/cpp /Users/lucascassiano/Documents/GitHub/reViz3d/exp/cpp /Users/lucascassiano/Documents/GitHub/reViz3d/exp/cpp /Users/lucascassiano/Documents/GitHub/reViz3d/exp/cpp/CMakeFiles/hello-vsc.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/hello-vsc.dir/depend

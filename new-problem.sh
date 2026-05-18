#!/usr/bin/env bash
# Scaffold a new problem.
# Usage: bash new-problem.sh <category> <slug> [lang]
# Example: bash new-problem.sh arrays-hashing contains-duplicate
# Example: bash new-problem.sh trees invert-binary-tree java

set -e

CATEGORY=${1:?'Usage: bash new-problem.sh <category> <slug> [lang=typescript]'}
SLUG=${2:?'Usage: bash new-problem.sh <category> <slug> [lang=typescript]'}
LANG=${3:-typescript}

DIR="$LANG/$CATEGORY/$SLUG"

if [[ -d "$DIR" ]]; then
  echo "Already exists: $DIR"
  exit 1
fi

mkdir -p "$DIR"

if [[ "$LANG" == "typescript" ]]; then
  cat > "$DIR/solution.ts" << 'EOF'
import { trace } from '../../_utils/trace.js';

export function solve(): void {
  // TODO
}
EOF

  cat > "$DIR/solution.test.ts" << 'EOF'
import { describe, expect, test } from 'vitest';
import { solve } from './solution.js';

// TRACE=1 npx vitest run <category>/<slug>

describe('Problem Name', () => {
  test('example 1', () => {
    // expect(solve()).toEqual();
  });
});
EOF

elif [[ "$LANG" == "java" ]]; then
  cat > "$DIR/Solution.java" << 'EOF'
public class Solution {
    public void solve() {
        // TODO
    }
}
EOF

  cat > "$DIR/SolutionTest.java" << 'EOF'
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SolutionTest {
    @Test
    public void example1() {
        Solution s = new Solution();
        // assertEquals(expected, s.solve());
    }
}
EOF

fi

echo "Created: $DIR"
echo "Edit: $DIR/solution.ts"
